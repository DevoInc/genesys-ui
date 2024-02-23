import { css, DefaultTheme } from 'styled-components';
import { PanelFooterAttrs } from './declarations';

/**
 * Get the specific styles for Flex component when it's used as a PanelFooterContainer component
 *
 * @return styles for PanelFooterContainer
 */

export const panelFooterContainerMixin = ({
  bordered,
  hasBackground,
  hasBoxShadow,
  removeSpace,
  size,
  theme,
}: {
  bordered: PanelFooterAttrs['bordered'];
  hasBackground: PanelFooterAttrs['hasBackground'];
  hasBoxShadow: PanelFooterAttrs['hasBoxShadow'];
  removeSpace: PanelFooterAttrs['removeSpace'];
  size: PanelFooterAttrs['size'];
  theme: DefaultTheme;
}) => {
  const panelFooterTokens = theme.cmp.panel.footer;
  const footerModalTokens = theme.cmp.modal.footer;
  return css`
    box-shadow: ${hasBoxShadow && panelFooterTokens.elevation.boxShadow};
    border-top: ${bordered && `1px solid ${panelFooterTokens.color.border}`};
    background-color: ${hasBackground && footerModalTokens.color.background};
    padding: ${removeSpace ? '0' : panelFooterTokens.space.padding[size]};

    &:empty {
      display: none;
    }
  `;
};
