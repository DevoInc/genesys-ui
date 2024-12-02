import { css, DefaultTheme } from 'styled-components';

import type { IPanelSpaceAttrs } from '../../declarations';
import type { IPanelFooterAttrs } from './declarations';
import { getSpacingPropCss } from '../../../../helpers';

export interface IPanelFooterContainerMixin extends IPanelSpaceAttrs {
  bordered: IPanelFooterAttrs['bordered'];
  hasBackground: IPanelFooterAttrs['hasBackground'];
  hasBoxShadow: IPanelFooterAttrs['hasBoxShadow'];
  removeSpace: IPanelFooterAttrs['removeSpace'];
  size: IPanelFooterAttrs['size'];
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Flex component when it's used as a PanelFooterContainer component
 *
 * @return styles for PanelFooterContainer
 */
export const panelFooterContainerMixin = ({
  bordered,
  hasBackground,
  hasBoxShadow,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  removeSpace,
  size,
  theme,
}: IPanelFooterContainerMixin) => {
  const panelFooterTokens = theme.cmp.panel.footer;
  const footerModalTokens = theme.cmp.modal.footer;
  return css`
    box-shadow: ${hasBoxShadow && panelFooterTokens.elevation.boxShadow};
    border-top: ${bordered && `1px solid ${panelFooterTokens.color.border}`};
    background-color: ${hasBackground && footerModalTokens.color.background};
    padding: ${padding
      ? getSpacingPropCss(theme)(padding)
      : removeSpace
        ? '0'
        : panelFooterTokens.space.padding[size]};
    padding-top: ${paddingTop && getSpacingPropCss(theme)(paddingTop)};
    padding-right: ${paddingRight && getSpacingPropCss(theme)(paddingRight)};
    padding-bottom: ${paddingBottom && getSpacingPropCss(theme)(paddingBottom)};
    padding-left: ${paddingLeft && getSpacingPropCss(theme)(paddingLeft)};

    &:empty {
      display: none;
    }
  `;
};
