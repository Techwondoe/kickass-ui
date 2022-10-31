# Techwondoe Component Library Development

## Documentation

- [Code guidelines](./CODE_GUIDELINES.md)
- [Contributing](./CONTRIBUTING.md)

## Installation

- Dependencies

  - [nvm](https://github.com/nvm-sh/nvm)
  - [yarn](https://classic.yarnpkg.com)

First, make sure to install the correct version of node contained in `.nvmrc`.

```bash
nvm use
```

Windows users:

```bash
type .\.nvmrc | %{$_ -replace "v",""} | %{nvm install $_}
type .\.nvmrc | %{$_ -replace "v",""} | %{nvm use $_}
```

Install the `node_modules`.

```bash
yarn
```

You're all set!

## Development

We can just use below command to start a local server:

```bash
yarn start
```

## Other Scripts

Format files:

```
yarn format
```

Lint files:

```
yarn lint
```

Lint files and apply fixes:

```
yarn lint:fix
```

Check for Typescript errors:

```
yarn ts
```

Run tests:

```
yarn test
```

Run all checks (format followed by linting, ts, tests):

```
yarn checks
```

Run Storybook locally:

```
yarn storybook
```
