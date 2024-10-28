import { css, DefaultTheme } from 'styled-components';

export const formGroupCollapseMixin = ({
  theme,
}: {
  theme: DefaultTheme;
}) => css`
  min-height: 0;
  border: none;
  background-color: transparent;

  &::before,
  &::after {
    content: none;
  }

  > * {
    padding: ${theme.alias.space.cmp.xs} 0;
  }
`;
