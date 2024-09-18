import styled, { type CSSProp } from 'styled-components';

import { truncateTypoMixin } from '../../../../styled';

// TODO: interface only for satisfy the type error with TS and inherit CSSProp
export interface StyledTagLabelProps {
  css?: CSSProp;
}

export const StyledTagLabel = styled.span<StyledTagLabelProps>`
  ${() => truncateTypoMixin()};
`;
