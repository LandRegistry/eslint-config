# HMLR ESLint Config

```sh
npm i @hmlr/eslint-config
```

## General use for JS or TS projects

https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config

```json
{
    "extends": "@hmlr/eslint-config"
}
```

## Use within React projects

```sh
npm i eslint-plugin-jsx eslint-plugin-jsx-a11y eslint-plugin-react
```

```json
{
    "extends": [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "@hmlr/eslint-config"
    ]
}
```

