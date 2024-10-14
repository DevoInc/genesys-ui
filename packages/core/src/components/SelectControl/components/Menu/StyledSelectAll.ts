import styled, { css } from 'styled-components';

import type { ICommonSelectCmps } from '../../declarations';

export interface StyledSelectAllProps {
  $multipleSubtle?: ICommonSelectCmps['multipleSubtle'];
  $size?: ICommonSelectCmps['size'];
}

export const StyledSelectAll = styled.div<StyledSelectAllProps>`
  ${({ $multipleSubtle, $size, theme }) => {
    const cmpTokens = theme.cmp.selectControl.selectAll;
    return css`
      ${$multipleSubtle
        ? css`
            padding: ${cmpTokens.space.padding.isMultipleSubtle[$size]};
          `
        : css`
            border-bottom: ${cmpTokens.shape.border.bottom};
            padding: ${cmpTokens.space.padding.base[$size]};
          `}
    `;
  }}
`;
