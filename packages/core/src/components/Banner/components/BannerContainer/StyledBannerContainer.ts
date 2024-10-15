import styled, { css } from 'styled-components';

import type { IBanner } from '../../declarations';

export interface StyledBannerContainerProps {
  $status?: IBanner['status'];
  $subtle?: IBanner['subtle'];
}

export const StyledBannerContainer = styled.div<StyledBannerContainerProps>`
  ${({ $status = 'info', $subtle, theme }) => {
    const cmpTokens = theme.cmp.boxMessage;
    return css`
      position: relative;
      display: flex;
      align-items: ${$subtle ? 'center' : 'flex-start'};
      gap: ${cmpTokens.space.gap[$subtle ? 'subtle' : 'base']};
      border: ${$subtle
        ? 'none'
        : `${cmpTokens.shape.borderSize} solid
        ${cmpTokens.color.border[$status]}`};
      border-radius: ${cmpTokens.shape.borderRadius};
      padding: ${cmpTokens.space.padding[$subtle ? 'subtle' : 'base']};
      background-color: ${cmpTokens.color.background[
        $subtle ? 'subtle' : $status
      ]};
    `;
  }}
`;
