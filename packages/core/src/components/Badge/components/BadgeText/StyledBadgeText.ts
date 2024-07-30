import styled, { CSSProp } from 'styled-components';

import { truncateTypoMixin } from '../../../../styled';

// TODO: interface only for satisfy the type error with TS and inherit CSSProp
export interface StyledBadgeTextProps {
  css?: CSSProp;
}

export const StyledBadgeText = styled.span<StyledBadgeTextProps>`
  ${truncateTypoMixin()};
  line-height: 1;
`;
