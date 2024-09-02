import styled, { css } from 'styled-components';

import type { IBanner } from '../../declarations';

export interface StyledBannerContainerProps {
  $status?: IBanner['status'];
  $subtle?: IBanner['subtle'];
}

export const StyledBannerContainer = styled.div<StyledBannerContainerProps>`
  ${({ $status = 'info', $subtle, theme }) => {
    const aliasTokens = theme.alias;
    const cmpTokens = theme.cmp.boxMessage;
    return css`
      position: relative;
      display: flex;
      align-items: ${$subtle ? 'center' : 'flex-start'};
      gap: ${$subtle ? aliasTokens.space.cmp.xs : cmpTokens.space.padding};
      border: ${$subtle
        ? 'none'
        : `${cmpTokens.shape.borderSize} solid
        ${cmpTokens.color.border[$status]}`};
      border-radius: ${cmpTokens.shape.borderRadius};
      padding: ${$subtle
        ? `${aliasTokens.space.cmp.xxs} ${aliasTokens.space.cmp.xs}`
        : cmpTokens.space.padding};
      background-color: ${$subtle
        ? aliasTokens.color.background.surface.base.featured
        : cmpTokens.color.background[$status]};
    `;
  }}
`;
