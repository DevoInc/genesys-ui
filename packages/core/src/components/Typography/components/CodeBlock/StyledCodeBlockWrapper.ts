import styled from 'styled-components';

import type { ITypography } from '../../declarations';
import { getSpacingPropCss } from '../../../../helpers';

export interface StyledCodeBlockWrapperProps {
  $gutterBottom?: ITypography['gutterBottom'];
}

export const StyledCodeBlockWrapper = styled.div<StyledCodeBlockWrapperProps>`
  margin-bottom: ${({ theme, $gutterBottom }) =>
    getSpacingPropCss(theme)($gutterBottom)};
  padding: ${({ theme }) => theme.cmp.codeBlock.space.padding.base};
  background: ${({ theme }) => theme.cmp.codeBlock.color.background.base};

  &:last-child {
    margin-bottom: 0;
  }
`;
