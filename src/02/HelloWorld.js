const fs = require('fs');

const bytes = fs.readFileSync(__dirname + '/HelloWorld.wasm');

const start_string_index = 100;
const memory = new WebAssembly.Memory({ initial: 1 });

const importObject = {
  env: {
    buffer: memory,
    start_string: start_string_index,
    print_string(str_len) {
      const bytes = new Uint8Array(memory.buffer, start_string_index, str_len);
      const log_string = new TextDecoder('utf8').decode(bytes);
      console.log(log_string);
    }
  }
}

WebAssembly.instantiate(new Uint8Array(bytes), importObject)
  .then(module => {
    const { helloworld: helloWorld } = module.instance.exports;
    helloWorld();
  });