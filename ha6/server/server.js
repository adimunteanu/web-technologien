const http = require('http');
const port = 8000;

const root = __dirname + '/files'

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  // TODO: implement me
  
  res.end('Hello client!'); // to be deleted
}).listen(port);