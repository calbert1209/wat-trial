# wat-trial

Repo to hold my code related to the exercises in _The Art of WebAssembly_ by [Rick Battagline](https://github.com/battlelinegames) ([On O'Reilly](https://learning.oreilly.com/library/view/the-art-of/9781098128982/))

## setup

I decided to install Rick Battagline's [`wat-wasm`](https://github.com/battlelinegames/wat-wasm) converter package locally rather than globally, so package installation is required

**via npm**

```sh
npm ci
```

**via yarn**

```sh
yarn
```

## scripts

### `2wasm`

Generates a wasm binary file in the same directory as the specified `.wat` file. For example, running the script with the single argument below will generate a `.wasm` binary file at the path `./src/02/loop.wasm`.

```sh
yarn 2wasm ./src/02/loop.wat
```
