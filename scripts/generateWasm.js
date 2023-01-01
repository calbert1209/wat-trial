const path = require('path');
const { watwasm } = require('wat-wasm/src/watwasm')

const targetFilePath = process.argv[2]
const parsed = path.parse(targetFilePath);
const wasmFilePath = path.join(parsed.dir, `${parsed.name}.wasm`)

watwasm([null, null, targetFilePath, '-o', wasmFilePath]);