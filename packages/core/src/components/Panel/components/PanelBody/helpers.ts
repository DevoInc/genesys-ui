import { css, DefaultTheme } from 'styled-components';

import { scrollbars } from '../../../../styled';
import type {
  IPanelContainerAttrs,
  IPanelSpaceAttrs,
} from '../../declarations';
import type { IPanelBodyAttrs } from './declarations';
import { getSpacingPropCss } from '../../../../helpers';

export interface PanelBodyMixinProps
  extends Pick<IPanelContainerAttrs, 'size'>,
    IPanelBodyAttrs,
    IPanelSpaceAttrs {
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Box component when it's used as a PanelBody component
 *
 * @return styles for PanelBody
 */
export const panelBodyMixin = ({
  hasScrollSpacing,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  removeSpace,
  size = 'md',
  theme,
}: PanelBodyMixinProps) => {
  const panelBodyTokens = theme.cmp.panel.content;
  let evalPadding = padding
    ? getSpacingPropCss(theme)(padding)
    : removeSpace
      ? '0'
      : panelBodyTokens.space.padding[size];
  const margin = hasScrollSpacing
    ? panelBodyTokens.space.margin[size]
    : undefined;

  return css`
    ${scrollbars({ $trackRadius: !hasScrollSpacing && '0', theme })};
    padding: ${evalPadding};
    padding-top: ${paddingTop && getSpacingPropCss(theme)(paddingTop)};
    padding-right: ${paddingRight && getSpacingPropCss(theme)(paddingRight)};
    padding-bottom: ${paddingBottom && getSpacingPropCss(theme)(paddingBottom)};
    padding-left: ${paddingLeft && getSpacingPropCss(theme)(paddingLeft)};
    margin: ${margin};
  `;
};
