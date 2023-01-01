const { instantiateWasmModule } = require('../common');

const createLogger = (label) => (value) => console.log(label, value);
const importObject = {
  js: {
    log_i32: createLogger("i32: "),
    log_f32: createLogger("f32: "),
    log_f64: createLogger("f64: "),
  },
  env: {
    import_i32: 5_000_000_000,
    import_f32: 123.0123456789,
    import_f64: 123.0123456789,
  }
};

const filePath = __dirname + "/globals.wasm";

instantiateWasmModule(filePath, importObject, (module) => {
  const { global_test } = module.instance.exports;
  global_test();
});
