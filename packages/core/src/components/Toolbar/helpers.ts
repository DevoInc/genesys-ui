import { css, DefaultTheme } from 'styled-components';

/**
 * Get the specific spacing styles for Flex component when it's used as a ToolbarContainer component
 *
 * @return specific styles
 */
export const toolbarContainerMixin = ({
  theme,
}: {
  theme: DefaultTheme;
}) => css`
  grid-area: Toolbar;
  list-style: none;
  background-color: ${theme.alias.color.background.surface.base.base};
`;
