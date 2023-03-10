# Genesys UI

> **Warning**
> This is an `alpha` version and it is not yet production ready.

![license](https://img.shields.io/github/license/devoinc/genesys-ui)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/devoinc/genesys-ui/ci.yml)

Monorepo containing the codebase for the Genesys UI components library.

The project is built using `npm workspaces` and includes the following packages:

[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui?label=%40devoinc%2Fgenesys-ui)](https://www.npmjs.com/package/@devoinc/genesys-ui)
[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui-form?label=%40devoinc%2Fgenesys-ui-form)](https://www.npmjs.com/package/@devoinc/genesys-ui-form)
[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui-datetime?label=%40devoinc%2Fgenesys-ui-datetime)](https://www.npmjs.com/package/@devoinc/genesys-ui-datetime)

- **genesys-ui:** Core package containing base components.
- **genesys-ui-form:** Form components.
- **genesys-ui-datetime:** Date and time components.

The packages have the following interdependencies:

```
├─┬ @devoinc/genesys-ui-datetime
│ └── @devoinc/genesys-ui
├─┬ @devoinc/genesys-ui-form
│ ├── @devoinc/genesys-ui
├─┬ @devoinc/genesys-ui
```

## Quick start

\* Ensure you are using `npm` version 7 or higher and `Node.js` version 16 or higher

```sh
## Clone the repository
git clone https://github.com/devoinc/genesys-ui
## Go to folder
cd genesys-ui
## Install dependencies
npm ci

## Run Storybook
npm run storybook
## Build the packages
npm run build
## Build the storybook
npm run build-storybook
## Run tests
npm run test
## Run lint
npm run lint
```

## Documentation

For detailed documentation please refer to the READMEs of the internal packages:

- [genesys-ui/README.md](./packages/core/README.md)
- [genesys-ui-form/README.md](./packages/form/README.md)
- [genesys-ui-datetime/README.md](./packages/datetime/README.md)

## Changelog

The changelog is available [here](./CHANGELOG.md).

## Contributing

Instructions on how to contribute are detailed [here](./CONTRIBUTING.md).

## Code of conduct

The code of conduct is detailed [here](CODE_OF_CONDUCT.md).

## License

Find the full license content [here](LICENSE).

## Team

The team in charge of this codebase is [DevoInc/Quvis](https://github.com/orgs/DevoInc/teams/quvis).
