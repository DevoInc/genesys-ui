import { css, DefaultTheme } from 'styled-components';
import { PanelSize } from '../../declarations';
import { scrollbars } from '../../../../styled';

export interface PanelBodyMixinProps {
  removeSpace?: boolean;
  hasScroll?: boolean;
  size?: PanelSize;
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Box component when it's used as a PanelBody component
 *
 * @return styles for PanelBody
 */

export const panelBodyMixin = ({
  hasScroll,
  removeSpace,
  size = 'md',
  theme,
}: PanelBodyMixinProps) => {
  const panelBodyTokens = theme.cmp.panel.content;
  let trackRadius;
  let padding = panelBodyTokens.space.padding[size];
  const margin = hasScroll ? panelBodyTokens.space.margin[size] : undefined;

  if (removeSpace) {
    trackRadius = '0';
    padding = '0';
  }
  return css`
    ${scrollbars({ trackRadius, theme })};
    padding: ${padding};
    margin: ${margin};
  `;
};
