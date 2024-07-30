import styled, { css } from 'styled-components';

import type { ITypography } from '../../declarations';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledCodeBlockWrapperProps
  extends Pick<ITypography, 'gutterBottom'> {}

export const StyledCodeBlockWrapper = styled.div<StyledCodeBlockWrapperProps>`
  ${({ gutterBottom, theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    return css`
      margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
      padding: ${spacingTokens.cmp.sm} ${spacingTokens.cmp.md};
      background: ${aliasTokens.color.background.surface.base.raised};

      &:last-child {
        margin-bottom: 0;
      }
    `;
  }}
`;
