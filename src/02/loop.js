const { instantiateWasmModule } = require('../common');

const n = parseInt(process.argv[2] || '1');
if (n > 12) {
  throw Error('argument must be smaller than 12')
}

const fileName = __dirname + '/loop.wasm';
const importObject = {
  env: {
    log: (some_n, result) => console.log("%d! = %d", some_n, result)
  }
}

instantiateWasmModule(fileName, importObject, (module) => {
  const {loop_test} = module.instance.exports;
  loop_test(n);
});
