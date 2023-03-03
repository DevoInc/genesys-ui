# Genesys UI Datetime

> **Warning**
> This is an `alpha` version and it is not yet production ready.

Package containing a set of components for date and time selection. It belongs to the [Genesys UI]() component library and is built on top of the [core]() package.

Among others, this package contains the following components:

```
Calendar, DateTimeRangePicker, DateTime, Presets, DateTimePicker, RangeInput, DateTimeRange, ...
```

More information about the components can be found in [Genesys UI Storybook]().

## Installation

To install the package, run the following command:

```sh
npm install @devoinc/genesys-ui-datetime
```

This package needs [genesys-ui]() to work. If you don't have it already, you can install it with the following command:

```sh
npm install @devoinc/genesys-ui
```

**Note:** Make sure you have followed the [Installation](path=/docs/getting-started-installation--docs) steps in the Storybook of the repository before installing the package. This will ensure that you have all the necessary dependencies and stylesheets in place.

## Usage

Importing the `genesys-ui-datetime` package into your project will give you access to all of the components and utilities that are available in the library.

Using a component is as simple as adding the import, and using it in your code.

```jsx
// MyView.tsx

import * as React from 'react';
import { DateTimeRangePicker } from '@devoinc/genesys-ui-datetime';

export const DateTimeRangePickerExample = () => <DateTimeRangePicker />;
```

## Development

Please refer to the main [README]() for information on how to contribute to the library.
