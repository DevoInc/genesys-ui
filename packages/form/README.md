# Genesys UI Form

> **Warning**
> This is an `alpha` version and it is not yet production ready.

Package containing a set of components for form handling. It belongs to the [Genesys UI]() component library and is built on top of the [core]() package.

Among others, this package contains the following components:

```
Checkbox, FieldsCombiner, RadioGroupTextarea, CheckboxGroup, Input, Select2, UploadFiles, ColorPicker, Radio, Switch, ...
```

More information about the components can be found in [Genesys UI Storybook]().

## Installation

To install the package, run the following command:

```sh
npm install @devoinc/genesys-ui-form
```

This package needs [genesys-ui]() to work. If you don't have it already, you can install it with the following command:

```sh
npm install @devoinc/genesys-ui
```

**Note:** Make sure you have followed the [Installation](path=/docs/getting-started-installation--docs) steps in the Storybook of the repository before installing the package. This will ensure that you have all the necessary dependencies and stylesheets in place.

## Usage

Importing the `genesys-ui-form` package into your project will give you access to all of the components and utilities that are available in the library.

Using a component is as simple as adding the import, and using it in your code.

```jsx
// MyView.tsx

import { Checkbox } from '@devoinc/genesys-ui-form';

export const CheckBoxGroupExample = () => <Checkbox />;
```

## Development

Please refer to the main [README]() for information on how to contribute to the library.
