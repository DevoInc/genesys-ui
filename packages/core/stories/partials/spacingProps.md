When assigning values to spacing props, such as 'spacing', margin, padding, gap... etc. of any layout component
as Box, Flex, HFlex, Flex.Item... etc. the values must be selected from a predefined list. This predefined values
are based in a design tokens brand, so they are equal in any Genesys context.

This list includes values such as '0', 'auto', 'inherit', 'cmp-xxs', 'cmp-xs',
'cmp-sm', 'cmp-md', 'cmp-lg', 'cmp-xl', 'cmp-xxl', 'cmp-xxxl', 'layout-xxs',
'layout-xs', 'layout-sm', 'layout-md', 'layout-lg', 'layout-xl', 'layout-xxl', and 'layout-xxxl'.

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
  'layout-xxs', // 1.6rem
  'layout-xs', // 2.4rem
  'layout-sm', // 3.2rem
  'layout-md', // 4.8rem
  'layout-lg', // 6.4rem
  'layout-xl', // 9.6rem
  'layout-xxl', // 12.8rem
  'layout-xxxl', // 16rem
];
```

To maintain the consistency of the UI, this list uses a 4px grid, which limits the possible values that can be assigned.

When selecting a spacing value for a prop, it is important to note that there are two types of spacing values: component values ('cmp-') and layout values ('layout-').

- `cmp-` should be used when creating spaces inside components, such as the space between a label and input or the separation between a heading and a paragraph.
- `layout-` should be used when creating spaces between layout blocks, such as the space between a Tabs component and its contents or the space between the main app toolbar, left main menu, and main content of the page.

Note: It is always recommended to use 'padding' properties to separate Flex component children because it maintains the same width or height for all.
