# Genesys UI Core

> **Warning**
> This is an `alpha` version and it is not yet production ready.

Core package for the Genesys UI component library. It contains the base components of the library, and is a dependency of `genesys-ui-form` and `genesys-ui-datetime`.

Among others, this package contains the following components:

```
AppBar, Fluid, RadioControl, Avatar, Form, Select2Control, Badge, Grid, SpinnerLoader, Box, Grid.Item, SplitPane, BoxMessage, HFlex, StatusMessage, Button, Helper, Stepper, ButtonGroup, Icon, SwitchControl, CheckboxControl, IconButton, Tabs, Chip, InlineMessage, Tag, ChipGroup, InputControl, TagGroup, ChoiceGroup, Label, TextareaControl, CollapseLink, Thumbnail, ContentSwitcher, Loader, Toast, DecoratorBar, Menu, Toolbar, DevoLogoLoader, Modal, Tooltip, Divider, Overlay, Typography, DropdownA11yMenuPagination, VFlex, Field, Panel, Wrap, Flex, Partitions, , FlexItemPopper, FloatPanel, ProgressBar, ...
```

## Preview

The available components can be previewed in the [Genesys UI Storybook](https://devoinc.github.io/genesys-ui/).
The Storybook includes a live preview of the components, as well as their documentation and code examples.

To visit the components comprised in this package, please refer to the __Components > Core__ section of the Storybook.

## Installation

To install the package, run the following command:

```sh
npm install @devoinc/genesys-ui
```

**Note:** Make sure you have followed the [Installation](path=/docs/getting-started-installation--docs) steps in the Storybook of the repository before installing the package. This will ensure that you have all the necessary dependencies and stylesheets in place.

## Usage

Importing the `genesys-ui` package into your project will give you access to all of the components and utilities that are available in the library.

Using a component is as simple as adding the import, and using it in your code.

```jsx
// MyView.tsx

import { Typography } from '@devoinc/genesys-ui';

export const MyView: React.FC = () => {
  return <Typography.Heading size="h1">Hello World!</Typography.Heading>;
};
```

## Development

Please refer to the main [README]() for information on how to contribute to the library.
