var message = "message"; // Die zu verschleiernde Nachricht.
var messageLength = message.length; // Die Länge der zu verschleiernden Nachricht.
var encoded = "";

// TODO: implement me
// Nutzen Sie: var hexChar = "0x" + message.charCodeAt(i).toString(16).
// um das i-te Zeichen eines Strings in eine Hexadezimalzahl zu überführen
for (let i = 0; i < messageLength; i++) {
  var hexChar = "0x" + message.charCodeAt(i).toString(16);
  encoded += hexChar;
}

var buffer = encoded.split("0x");
var bufferLength = buffer.length;
var decoded = "";

// TODO: implement me
// Nutzen Sie: var strChar = String.fromCharCode(parseInt(buffer[i], 16)),
// um die i-te Hexadezimalzahl im buffer in einen String zu konvertieren.
for (let i = 0; i < bufferLength; i++) {
  var strChar = String.fromCharCode(parseInt(buffer[i], 16));
  decoded += strChar;
}

console.log(message, encoded, decoded);
