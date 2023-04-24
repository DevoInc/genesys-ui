import styled, { css } from 'styled-components';

import { getPanelTokens } from '../../helpers';
import { scrollbars } from '../../../../styled/mixins/scrollbars';
import { PanelSize } from '../../declarations';

export interface StyledPanelBodyContainerProps {
  hasScroll?: boolean;
  bodySettings?: {
    removeSpace?: boolean;
  };
  size?: PanelSize;
}

export const StyledPanelBodyContainer = styled.div<StyledPanelBodyContainerProps>`
  ${({ bodySettings, hasScroll, size, theme }) => {
    const panelContentTokens = getPanelTokens(theme).content;

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