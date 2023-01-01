const fs = require("fs");

function loadWasmBytes(filePath) {
  const bytes = fs.readFileSync(filePath);
  return new Uint8Array(bytes);
}

module.exports = {
  loadWasmBytes,
}