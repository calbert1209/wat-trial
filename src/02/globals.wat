(module
  (global $import_i32 (import "env" "import_i32") i32)
  (global $import_f32 (import "env" "import_f32") f32)
  (global $import_f64 (import "env" "import_f64") f64)

  (import "js" "log_i32" (func $log_i32 (param i32)))
  (import "js" "log_f32" (func $log_f32 (param f32)))
  (import "js" "log_f64" (func $log_f64 (param f64)))

  (func (export "global_test")
    (call $log_i32 (global.get $import_i32))
    (call $log_f32 (global.get $import_f32))
    (call $log_f64 (global.get $import_f64))
  )
)