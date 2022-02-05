const http = require("http");
const fs = require("fs");

const port = 8000;

const root = __dirname + "/files";

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    let method = req.method;
    console.log(method + ": " + req.url);
    const path = root + req.url;
    let body = "";

    switch (method) {
      case "OPTIONS":
        // mit writeHead() wird der Header des HTTP-Responses definiert
        res.writeHead(204, { Allow: "OPTIONS, GET, POST, PUT, DELETE" });
        // mit end() wird der HTTP-Response abgeschlossen und verschickt
        res.end();
        break;
      case "GET":
        if (path.slice(-1) === "/") {
          fs.readdir(path, (err, files) => {
            if (err) {
              res.writeHead(404);
              res.end();
              return console.error("Unable to scan directory: " + err);
            }

            const result = files.map(function (file) {
              const type = fs.lstatSync(path + file).isFile()
                ? "file"
                : "directory";
              return { path: file, type };
            });
            res.writeHead(200, { "Content-Type": "text/json" });
            res.write(JSON.stringify(result));
            res.end();
          });
        } else {
          fs.readFile(path, (err, buff) => {
            if (err) {
              res.writeHead(404);
              res.end();
              return console.error("Unable to read from file: " + err);
            }

            const result = buff.toString();

            res.writeHead(200, { "Content-Type": "text/json" });
            res.write(JSON.stringify(result));
            res.end();
          });
        }

        break;
      case "POST":
        body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          if (path.slice(-1) === "/") {
            if (fs.existsSync(path)) {
              res.writeHead(400);
              res.end();
              return console.error("Directory already exists!");
            }

            fs.mkdirSync(path, { recursive: true });
            res.writeHead(201, { "Content-Type": "text/json" });
            res.end();
          } else {
            if (fs.existsSync(path)) {
              res.writeHead(400);
              res.end();
              return console.error("File already exists!");
            }

            if (body.length > 0) {
              console.log("BODY", body);

              fs.writeFile(path, body, (err) => {
                if (err) {
                  res.writeHead(400);
                  res.end();
                  return console.error("Error while creating file" + err);
                }
                res.writeHead(201, { "Content-Type": "text/json" });
                res.end();
              });
            } else {
              res.writeHead(400);
              res.end();
            }
          }
        });
        break;
      case "PUT":
        body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          if (path.slice(-1) === "/") {
            res.writeHead(400);
            res.end();
          } else {
            if (!fs.existsSync(path)) {
              res.writeHead(404);
              res.end();
              return console.error("File not found!");
            }

            if (body.length > 0) {
              console.log("BODY", body);

              fs.writeFile(path, body, (err) => {
                if (err) {
                  res.writeHead(400);
                  res.end();
                  return console.error("Error while creating file" + err);
                }
                res.writeHead(200, { "Content-Type": "text/json" });
                res.end();
              });
            } else {
              res.writeHead(400);
              res.end();
            }
          }
        });
        break;
      case "DELETE":
        if (path.slice(-1) === "/") {
          if (!fs.existsSync(path)) {
            res.writeHead(404);
            res.end();
            return console.error("Directory not found!");
          }

          fs.rmSync(path, { recursive: true });
          res.writeHead(204, { "Content-Type": "text/json" });
          res.end();
        } else {
          if (!fs.existsSync(path)) {
            res.writeHead(404);
            res.end();
            return console.error("File not found!");
          }
          fs.rmSync(path);
          res.writeHead(204, { "Content-Type": "text/json" });
          res.end();
        }
        break;
      default:
        res.writeHead(405);
        res.end();
        break;
    }
  })
  .listen(port);

console.log("Server listening on port " + port);
