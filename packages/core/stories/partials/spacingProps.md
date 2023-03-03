## Spacing props

The spacing scale can be applied to margin or padding properties, in any edge
(top, right, bottom and left).

When we assign values to spacing props of our flex container components as 'spacing',
'vSpacing' or 'hSpacing', or when we assign layout style props to our `FlexItem`,
 `Box` or any layout component, we have to pick the value from a predefined list:

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

The reason is we use a 4px grid and to maintain the consistence of the UI we need
to limit the possible values to be assigned. Anyway, if you have to select a
spacing value for your prop, you have to know we have two types of spacing values:
component values (`cmp-`) and layout values (`ly-`).

- `cmp-` should be used when we create spaces inside components e.g. the
space between label and input, the separation between a heading and a paragraph,
or the space between chips in a chip group.

- `ly-` should be used when we create spaces between layout blocks such as
organisms in a page or molecules inside organisms e.g. the space between a Tabs
component and its contents, or the space between main app toolbar, left main menu
and main content of the page.

IMPORTANT: we always recommend to use `padding` properties to separate `Flex`
component children, because it maintains the same width or height for all.
