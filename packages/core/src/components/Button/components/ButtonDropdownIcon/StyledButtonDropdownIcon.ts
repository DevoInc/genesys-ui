import styled, { css } from 'styled-components';

import { ButtonState } from '../../declarations';

export interface StyledButtonDropdownIconProps {
  /** Sets the color scheme according to component state */
  state?: ButtonState;
}

export const StyledButtonDropdownIcon = styled.i<StyledButtonDropdownIconProps>`
  ${({ state }) => css`
    display: block;
    transform: ${state === 'expanded' ? 'rotate(180deg)' : 'rotate(0deg)'};
  `}
`;
