import styled, { CSSProp } from 'styled-components';

export interface StyledChipLabelProps {
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledChipLabel = styled.span<StyledChipLabelProps>`
  position: relative;
`;
