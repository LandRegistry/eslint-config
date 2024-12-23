# HM Land Registry ESLint Config

A shareable ESLint config.

## Quickstart

```sh
# Install the shareable config
npm i -save-dev @hmlr/eslint-config

# Install all dependencies (npm 5+)
npx install-peerdeps --dev @hmlr/eslint-config
```

### How to use in JS or TS projects

Add the config to the `extends` property of your `.eslintrc*` file. For more information, see [using a shareable config](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config) on eslint.org

```json
{
  "extends": "@hmlr/eslint-config"
}
```

### React projects

```json
{
  "extends": "@hmlr/eslint-config/react"
}
```

### Node projects

```json
{
  "extends": "@hmlr/eslint-config/node"
}
```

### Running the rules

If you don't have ESLint set up already, you can add one or both of the following scripts to your `package.json`, changing directories, extensions and parameters as necessary:

```json
{
  "scripts": {
    "eslint": "eslint --ext js,jsx,ts,tsx src",
    "eslint:fix": "eslint --ext js,jsx,ts,tsx --fix src"
  }
}
```

## Prettier

In addition to linting your code with ESLint, we also recommend installing [Prettier](https://prettier.io/) to help with code formatting.

It is suggested that you avoid modifying any of the default options in order to maintain consistency. To learn why, see the [philosophy on options from Prettier](https://prettier.io/docs/en/option-philosophy.html).

```sh
npm i -save-dev prettier
prettier --write "src/**/*.{js,jsx,ts,tsx,css,scss,less,json,html}"
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://www.npmjs.com/package/@hmlr/eslint-config?activeTab=versions).

## How to contribute

We welcome contribution from the community. If you want to contribute to this project, please review the [code of conduct](CODE_OF_CONDUCT.md) and [contribution guidelines](CONTRIBUTING.md).

## Contributors

- [Andrew Hosgood](https://github.com/ahosgood) (Primary maintainer)

## Support

This software is provided _"as-is"_ without warranty. Support is provided on a _"best endeavours"_ basis by the maintainers and open source community.

If you are a civil servant you can sign up to the [UK Government Digital Slack](https://ukgovernmentdigital.slack.com/signup) workspace to contact the maintainers listed [above](#contributors) and the community of people using this project in the [#govuk-design-system](https://ukgovernmentdigital.slack.com/archives/C6DMEH5R6) channel.

Otherwise, please see the [contribution guidelines](CONTRIBUTING.md) for how to raise a bug report or feature request.
