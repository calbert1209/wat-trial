const { loadWasmBytes } = require('./load-wasm');

const instantiateWasmModule = (filePath, importObject, cb) => {
  const byteArray = loadWasmBytes(filePath)
  return WebAssembly.instantiate(byteArray, importObject).then(cb);
}

  module.exports = {
    instantiateWasmModule,
  }