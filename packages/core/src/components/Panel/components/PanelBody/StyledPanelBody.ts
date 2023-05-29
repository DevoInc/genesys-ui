import styled, { css } from 'styled-components';

import { scrollbars } from '../../../../styled';
import { PanelSize } from '../../declarations';

export interface StyledPanelBodyProps {
  hasScroll?: boolean;
  bodySettings?: {
    removeSpace?: boolean;
  };
  size?: PanelSize;
}

export const StyledPanelBody = styled.div<StyledPanelBodyProps>`
  ${({ bodySettings, hasScroll, size, theme }) => {
    const panelContentTokens = theme.cmp.panel.content;

    let trackRadius;
    let padding = panelContentTokens.space.padding[size];

    const margin = hasScroll
      ? panelContentTokens.space.margin[size]
      : undefined;

    if (bodySettings?.removeSpace) {
      trackRadius = '0';
      padding = '0';
    }

    return css`
      ${scrollbars({ trackRadius, theme })};
      position: relative;
      flex: 1 1 100%;
      padding: ${padding};
      margin: ${margin};
      overflow: auto;
    `;
  }};
`;
