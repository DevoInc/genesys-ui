# Genesys UI Color

> **Warning**
> This is an `alpha` version and it is not yet production ready.

Package containing a set of components for handling a color picker.
It belongs to the [Genesys UI](https://github.com/DevoInc/genesys-ui) component
library and is built on top of the
[core](https://github.com/DevoInc/genesys-ui/tree/master/packages/core) package.

Among others, this package contains the following components:

```
ColorPicker
```

## Preview

The available components can be previewed in the [Genesys UI Storybook](https://devoinc.github.io/genesys-ui/).
The Storybook includes a live preview of the components, as well as their documentation and code examples.

To visit the components comprised in this package, please refer to the **Components > Form** section of the Storybook.

## Installation

To install the package, run the following command:

```sh
npm install @devoinc/genesys-ui-color
```

This package needs [genesys-ui](https://www.npmjs.com/package/@devoinc/genesys-ui) to work.
If you don't have it already, you can install it with the following command:

```sh
npm install @devoinc/genesys-ui
```

**Note:** Make sure you have followed the
[Installation](https://devoinc.github.io/genesys-ui/?path=/docs/getting-started-installation--docs) steps in the Storybook of the repository before installing the package. This will ensure that you have all the necessary dependencies and stylesheets in place.

## Usage

Importing the `genesys-ui-color` package into your project will give you access
to all of the components and utilities that are available in the library.

Using a component is as simple as adding the import, and using it in your code.

```jsx
// MyView.tsx

import { ColorPicker } from '@devoinc/genesys-ui-color';

export const ColorPickerExample = () => <ColorPicker />;
```

## Development

Please refer to the main [README](https://github.com/DevoInc/genesys-ui#readme)
for information on how to contribute to the library.
