module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "@hmlr/eslint-config"
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
  }
}

