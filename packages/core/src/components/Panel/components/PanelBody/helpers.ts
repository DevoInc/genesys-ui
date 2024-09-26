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
  let padding = removeSpace ? 0 : panelBodyTokens.space.padding[size];
  const margin = hasScrollSpacing
    ? panelBodyTokens.space.margin[size]
    : undefined;

  return css`
    ${scrollbars({ $trackRadius: !hasScrollSpacing && '0', theme })};
    padding: ${padding};
    margin: ${margin};
  `;
};
