import { css, DefaultTheme } from 'styled-components';

import { scrollbars } from '../../../../styled';
import type { IPanelContainerAttrs } from '../../declarations';
import type { IPanelBodyAttrs } from './declarations';

export interface PanelBodyMixinProps
  extends Pick<IPanelContainerAttrs, 'size'>,
    IPanelBodyAttrs {
  theme: DefaultTheme;
}

/**
 * Get the specific styles for Box component when it's used as a PanelBody component
 *
 * @return styles for PanelBody
 */

export const panelBodyMixin = ({
  hasScrollSpacing,
  removeSpace,
  size = 'md',
  theme,
}: PanelBodyMixinProps) => {
  const panelBodyTokens = theme.cmp.panel.content;
  let trackRadius;
  let padding = panelBodyTokens.space.padding[size];
  const margin = hasScrollSpacing
    ? panelBodyTokens.space.margin[size]
    : undefined;

  if (!hasScrollSpacing) {
    trackRadius = '0';
  }

  if (removeSpace) {
    padding = '0';
  }

  return css`
    ${scrollbars({ trackRadius, theme })};
    padding: ${padding};
    margin: ${margin};
  `;
};
