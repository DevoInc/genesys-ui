import { css, DefaultTheme } from 'styled-components';
import { IPanelHeaderAttrs } from './declarations';

/**
 * Get the specific styles for Flex component when it's used as a PanelHeader append component
 *
 * @return styles for PanelHeader append
 */
export const panelHeaderAppendMixin = ({
  size,
  theme,
}: {
  size: IPanelHeaderAttrs['size'];
  theme: DefaultTheme;
}) => css`
  padding-left: ${theme.cmp.panel.headerAppend.space.marginLeft[size]};
  gap: ${theme.cmp.panel.headerAction.space.marginLeft[size]};
`;

/**
 * Get the specific styles for Flex component when it's used as a PanelHeaderContainer component
 *
 * @return styles for PanelHeaderContainer
 */
export const panelHeaderContainerMixin = ({
  bordered,
  hasBoxShadow,
  removeSpace,
  size,
  theme,
}: {
  bordered: IPanelHeaderAttrs['bordered'];
  hasBoxShadow: IPanelHeaderAttrs['hasBoxShadow'];
  removeSpace: IPanelHeaderAttrs['removeSpace'];
  size: IPanelHeaderAttrs['size'];
  theme: DefaultTheme;
}) => {
  const panelHeaderTokens = theme.cmp.panel.header;
  return css`
    box-shadow: ${hasBoxShadow && panelHeaderTokens.elevation.boxShadow};
    border-bottom: ${bordered && `1px solid ${panelHeaderTokens.color.border}`};
    padding: ${removeSpace ? '0' : theme.cmp.panel.header.space.padding[size]};

    &:empty {
      display: none;
    }
  `;
};
