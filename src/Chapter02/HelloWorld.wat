(module
  ;; import `env` object from host environment which contains
  ;; a function named `print_string`
  (import "env" "print_string" (func $print_string (param i32)))
  ;; import buffer, a single page of memory
  ;; 1 page (64KB) is the smallest unit of allocatable memory
  (import "env" "buffer" (memory 1))
  (global $start_string (import "env" "start_string") i32)
  (global $string_len i32 (i32.const 12))
  (data (global.get $start_string) "hello world!")
  (func (export "helloworld")
    (call $print_string (global.get $string_len))
  )
)