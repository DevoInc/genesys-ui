## [Spacing props](#spacing-props)

In a flex structure, we can apply spacing to margin or padding properties on any edge (top, right, bottom, and left).

When assigning values to spacing props, such as 'spacing', 'vSpacing', or 'hSpacing' of flex
container components or assigning layout style props to Flex.Item, Box,
or any layout component, values must be selected from a predefined list.

This list includes values such as '0', 'auto', 'inherit', 'cmp-xxs', 'cmp-xs',
'cmp-sm', 'cmp-md', 'cmp-lg', 'cmp-xl', 'cmp-xxl', 'cmp-xxxl', 'ly-xxs',
'ly-xs', 'ly-sm', 'ly-md', 'ly-lg', 'ly-xl', 'ly-xxl', and 'ly-xxxl'.

```js
const SPACING_PROP_VALUES = [
  '0',
  'auto',
  'inherit',
  'cmp-xxs', // 0.4rem
  'cmp-xs', // 0.8rem
  'cmp-sm', // 1.2rem
  'cmp-md', // 1.6rem
  'cmp-lg', // 2.4rem
  'cmp-xl', // 3.2rem
  'cmp-xxl', // 4rem
  'cmp-xxxl', // 4.8rem
  'ly-xxs', // 1.6rem
  'ly-xs', // 2.4rem
  'ly-sm', // 3.2rem
  'ly-md', // 4.8rem
  'ly-lg', // 6.4rem
  'ly-xl', // 9.6rem
  'ly-xxl', // 12.8rem
  'ly-xxxl', // 16rem
];
```

To maintain the consistency of the UI, this list uses a 4px grid, which limits the possible values that can be assigned.

When selecting a spacing value for a prop, it is important to note that there are two types of spacing values: component values ('cmp-') and layout values ('ly-').

- `cmp-` should be used when creating spaces inside components, such as the space between a label and input or the separation between a heading and a paragraph.
- `ly-` should be used when creating spaces between layout blocks, such as the space between a Tabs component and its contents or the space between the main app toolbar, left main menu, and main content of the page.

Note: It is always recommended to use 'padding' properties to separate Flex component children because it maintains the same width or height for all.
