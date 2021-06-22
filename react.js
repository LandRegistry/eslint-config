module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier/react",
    "@hmlr/eslint-config"
  ],
  // env: {
  //     browser: true
  // },
  plugins: [
    "eslint-plugin-react-hooks"
  ],
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

