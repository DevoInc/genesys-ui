import styled, { CSSProp } from 'styled-components';

export interface StyledChipLabelProps {
  css?: CSSProp;
}

export const StyledChipLabel = styled.span<StyledChipLabelProps>`
  position: relative;
`;
