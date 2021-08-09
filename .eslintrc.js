module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended"
  ],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    "block-scoped-var": 2,
    "complexity": ["warn", 10],
    "consistent-return": 2,
    "constructor-super": 2,
    "curly": 2,
    "default-param-last": 2,
    "eqeqeq": 2,
    "for-direction": 2,
    "getter-return": 2,
    "no-alert": 2,
    "no-async-promise-executor": 2,
    "no-case-declarations": 2,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-else-if": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-boolean-cast": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-import-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-eval": 2,
    "no-loop-func": 2,
    "no-loss-of-precision": 2,
    // "no-magic-numbers": 2,
    "no-misleading-character-class": 2,
    "no-multi-spaces": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-param-reassign": 2,
    "no-prototype-builtins": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-setter-return": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-this-before-super": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unreachable": 2,
    "no-unreachable-loop": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-labels": 2,
    "no-unused-vars": 2,
    "no-useless-catch": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-useless-return": 2,
    "no-warning-comments": 1,
    "no-with": 2,
    "no-var": "error",
    "prefer-const": 1,
    "prefer-destructuring": 1,
    "prefer-template": 1,
    // "require-await": 2,
    "require-yield": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "yoda": 2
  }
}

