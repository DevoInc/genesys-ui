# Genesys UI

![license](https://img.shields.io/github/license/devoinc/genesys-ui)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/devoinc/genesys-ui/ci.yml)

Monorepo containing the codebase for the Genesys UI components library.

The project is built using `npm workspaces` and includes the following packages:

[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui/latest?label=%40devoinc%2Fgenesys-ui@latest)](https://www.npmjs.com/package/@devoinc/genesys-ui)

[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui-form/latest?label=%40devoinc%2Fgenesys-ui-form@latest)](https://www.npmjs.com/package/@devoinc/genesys-ui-form)

[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui-datetime/latest?label=%40devoinc%2Fgenesys-ui-datetime@latest)](https://www.npmjs.com/package/@devoinc/genesys-ui-datetime)

[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-ui-code/latest?label=%40devoinc%2Fgenesys-ui-code@latest)](https://www.npmjs.com/package/@devoinc/genesys-ui-code)

- **genesys-ui:** Core package containing base components.
- **genesys-ui-form:** Form components.
- **genesys-ui-datetime:** Date and time components.
- **genesys-ui-datetime:** Code editing and code visualization components.

The packages have the following interdependencies:

```
├─┬ @devoinc/genesys-ui-datetime
│ └── @devoinc/genesys-ui
├─┬ @devoinc/genesys-ui-form
│ ├── @devoinc/genesys-ui
├─┬ @devoinc/genesys-ui
├─┬ @devoinc/genesys-ui-code
│ ├── @devoinc/genesys-ui
```

## Preview

The available components can be previewed in the [Genesys UI Storybook](https://devoinc.github.io/genesys-ui/).
The Storybook includes a live preview of the components, as well as their documentation and code examples.

## Development

### Quick start

Ensure you are using npm &ge; v7 and Node.js &ge; v18.

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

### Linking external packages

This project uses [Vite](https://vitejs.dev/) for development. Vite serves the code via native ES Module imports during development. Therefore, Vite converts all dependencies that are shipped as CommonJS modules to ES modules. To improve the performance, it [pre-bundles](https://vitejs.dev/guide/dep-pre-bundling.html) and caches them inside the `node_modules/.cache` directory.

If you want to link an external package to the project, you need to make sure that the package is available in **ESM format**. Besides, you have to ensure that the package is **not listed in the `optimizeDeps.include` section** of the `main.ts` file. If the package is listed there, Vite will pre-bundle it and will always use the cached version, even if you link a local version of the package. In that case, you will have to temporarily remove or comment the package from the `optimizeDeps.include` section.

Once the above conditions are met, you can link the package to the project by running the following commands:

```sh
# Create a link to the package
cd <package-name>
npm link

# Link the package to the project
cd genesys-ui
npm link <package-name>

# Clean the cache 
cd genesys-ui
npm run clean:cache

# Restart the development server
npm start

```

Note: You might have to reload the browser o every change you make to the linked package to see the changes.


## Documentation

For detailed documentation please refer to the READMEs of the internal packages:

- [genesys-ui/README.md](./packages/core/README.md)
- [genesys-ui-form/README.md](./packages/form/README.md)
- [genesys-ui-datetime/README.md](./packages/datetime/README.md)
- [genesys-ui-code/README.md](./packages/code/README.md)

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

