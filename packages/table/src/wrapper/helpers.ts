import { css, DefaultTheme } from 'styled-components';

/**
 * Get the styles for the Table row actions when they are inactive/active
 *
 * @param props The object param
 * @param props.theme The object with all the design tokens
 * @return object with the CSS.
 */

export const tableActionsOpacityMixin = ({
  theme,
}: {
  theme: DefaultTheme;
}) => css`
  opacity: ${theme.cmp.table.cellQuickActions.shape.opacity};
  transition: opacity ease-in-out
    ${theme.cmp.button.mutation.transitionDuration};

  tr:hover &,
  tr:has(:focus) &,
  tr:has(:focus-visible) &,
  tr:has(:hover) &,
  tr:has([aria-expanded='true']) &,
  &:hover,
  &:focus,
  &:active,
  &[aria-expanded='true'],
  &:has(:hover),
  &:has(:focus),
  &:has(:active),
  &:has([aria-expanded='true']) {
    opacity: 1;
  }
`;
