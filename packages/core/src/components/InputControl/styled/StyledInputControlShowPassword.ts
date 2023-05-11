import styled, { css } from 'styled-components';
import { StyledInputControlProps } from './StyledInputControl';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledInputControlShowPasswordProps
  extends Pick<StyledInputControlProps, '$size'> {}
export const StyledInputControlShowPassword = styled.span<StyledInputControlShowPasswordProps>`
  position: absolute;
  top: 50%;
  right: ${({ $size, theme }) =>
    css`
      ${theme.alias.fields.space.padding.hor[$size]}
    `};
  transform: translate(0, -50%);
  z-index: 1;
`;
