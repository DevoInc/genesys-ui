import styled from 'styled-components';

import type { ITypography } from '../../declarations';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledCodeBlockWrapperProps {
  $gutterBottom?: ITypography['gutterBottom'];
}

export const StyledCodeBlockWrapper = styled.div<StyledCodeBlockWrapperProps>`
  margin-bottom: ${({ theme, $gutterBottom }) =>
    getSpacingPropCss(theme)($gutterBottom)};
  // TODO: cmpTokens
  padding: ${({ theme }) =>
    `${theme.alias.space.cmp.sm} ${theme.alias.space.cmp.md}`};
  background: ${({ theme }) =>
    theme.alias.color.background.surface.base.raised};

  &:last-child {
    margin-bottom: 0;
  }
`;
