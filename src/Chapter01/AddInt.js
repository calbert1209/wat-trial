const fs = require('fs');
const path = require('path');

const [raw_1, raw_2] = process.argv.slice(2);
const value_1 = parseInt(raw_1);
const value_2 = parseInt(raw_2);

const modulePath = path.resolve(__dirname, 'AddInt.wasm');
const bytes = fs.readFileSync(modulePath);

(async function main() {
  const wasmModule = await WebAssembly.instantiate(new Uint8Array(bytes));
  const result = wasmModule.instance.exports.AddInt(value_1, value_2);
  
  console.log('%d + %d = %d', value_1, value_2, result);
})();