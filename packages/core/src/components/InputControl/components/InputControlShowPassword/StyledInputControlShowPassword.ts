import styled, { css, CSSProp } from 'styled-components';

import type { StyledInputControlProps } from '../InputControlInput/StyledInputControl';

export interface StyledInputControlShowPasswordProps
  extends Pick<StyledInputControlProps, '$size'> {
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledInputControlShowPassword = styled.span<StyledInputControlShowPasswordProps>`
  position: absolute;
  top: 50%;
  right: ${({ $size, theme }) => css`
    ${theme.alias.fields.space.padding.hor[$size]}
  `};
  display: flex;
  transform: translate(0, -50%);
  z-index: 1;
`;
