import { css, DefaultTheme } from 'styled-components';

import type { IPanelHeaderAttrs } from './declarations';
import type { IPanelSpaceAttrs } from '../../declarations';
import {
  getSpacingPropCss,
  marginAndPaddingToArray,
} from '../../../../helpers';

export interface IPanelHeaderContainerMixin extends IPanelSpaceAttrs {
  bordered: IPanelHeaderAttrs['bordered'];
  hasBoxShadow: IPanelHeaderAttrs['hasBoxShadow'];
  removeSpace: IPanelHeaderAttrs['removeSpace'];
  size: IPanelHeaderAttrs['size'];
  theme: DefaultTheme;
}

export interface IPanelHeaderNavigationMixin
  extends Omit<IPanelSpaceAttrs, 'paddingTop'> {
  removeSpace: IPanelHeaderAttrs['removeSpace'];
  size: IPanelHeaderAttrs['size'];
  theme: DefaultTheme;
}

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
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  size,
  theme,
}: IPanelHeaderContainerMixin) => {
  const panelHeaderTokens = theme.cmp.panel.header;
  return css`
    box-shadow: ${hasBoxShadow && panelHeaderTokens.elevation.boxShadow};
    border-bottom: ${bordered && `1px solid ${panelHeaderTokens.color.border}`};
    padding: ${padding
      ? getSpacingPropCss(theme)(padding)
      : removeSpace
        ? '0'
        : panelHeaderTokens.space.padding[size]};
    padding-top: ${paddingTop && getSpacingPropCss(theme)(paddingTop)};
    padding-right: ${paddingRight && getSpacingPropCss(theme)(paddingRight)};
    padding-bottom: ${paddingBottom && getSpacingPropCss(theme)(paddingBottom)};
    padding-left: ${paddingLeft && getSpacingPropCss(theme)(paddingLeft)};

    &:empty {
      display: none;
    }
  `;
};

/**
 * Get the specific styles for Flex component when it's used as a PanelHeaderNavigation component
 *
 * @return styles for PanelHeaderNavigation
 */
export const panelHeaderNavigationMixin = ({
  removeSpace,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  size,
  theme,
}: IPanelHeaderNavigationMixin) => {
  return css`
    margin: ${removeSpace
      ? '0'
      : paddingRight
        ? `0 calc(${getSpacingPropCss(theme)(paddingRight)} * -1) 0 0`
        : paddingLeft
          ? `0 0 0 calc(${getSpacingPropCss(theme)(paddingLeft)} * -1)`
          : padding
            ? `0 calc(${marginAndPaddingToArray(getSpacingPropCss(theme)(padding))[1]} * -1)`
            : `0 calc(${marginAndPaddingToArray(theme.cmp.panel.header.space.padding[size])[1]} * -1) 0 calc(${marginAndPaddingToArray(theme.cmp.panel.header.space.padding[size])[3]} * -1)`};
    margin-bottom: ${removeSpace
      ? '0'
      : paddingBottom
        ? `calc(${getSpacingPropCss(theme)(paddingBottom)} * -1)`
        : padding
          ? `calc(${marginAndPaddingToArray(getSpacingPropCss(theme)(padding))[2]} * -1)`
          : `calc(${marginAndPaddingToArray(theme.cmp.panel.header.space.padding[size])[2]} * -1)`};
    margin-left: ${removeSpace
      ? '0'
      : paddingLeft
        ? `calc(${getSpacingPropCss(theme)(paddingLeft)} * -1)`
        : padding
          ? `calc(${marginAndPaddingToArray(getSpacingPropCss(theme)(padding))[1]} * -1)`
          : `calc(${marginAndPaddingToArray(theme.cmp.panel.header.space.padding[size])[3]} * -1)`};
    margin-right: ${removeSpace
      ? '0'
      : paddingRight
        ? `calc(${getSpacingPropCss(theme)(paddingRight)} * -1)`
        : padding
          ? `calc(${marginAndPaddingToArray(getSpacingPropCss(theme)(padding))[1]} * -1)`
          : `calc(${marginAndPaddingToArray(theme.cmp.panel.header.space.padding[size])[1]} * -1)`};
  `;
};
