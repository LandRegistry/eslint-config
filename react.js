module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "@hmlr/eslint-config"

  ],
  // env: {
  //     browser: true
  // },
  parserOptions: {
    ecmaVersion: 12,
    // sourceType: "script",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
  }
}

