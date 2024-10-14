import styled, { css } from 'styled-components';

import type { TFieldSize, TFieldStatus } from '../../declarations';
import { checkRadioMixin } from '../../styled/mixins';

export interface StyledRadioControlProps {
  /** The size for the checkbox. It affects to its width, height, font-size...
   * etc. */
  $size?: TFieldSize;
  /** The status for the checkbox: success, error... etc. */
  $status?: TFieldStatus;
}

export const StyledRadioControl = styled.input.attrs({
  type: 'radio',
})<StyledRadioControlProps>`
  ${({ $size = 'md', $status = 'base', theme }) => {
    const cmpTokens = theme.cmp.radioControl;
    const markerTokens = cmpTokens.marker;
    const markerSquare = markerTokens.size.square[$size];
    const borderRadius = cmpTokens.shape.borderRadius;
    const bgColorChecked = cmpTokens.color.background[$status].checked;
    const transition = `all ease-in-out ${cmpTokens.mutation.transitionDuration}`;

    return css`
      ${checkRadioMixin({ $size, $status, tokens: cmpTokens })};
      appearance: none;
      margin: 0;
      border-radius: ${borderRadius};

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${markerSquare};
        height: ${markerSquare};
        border-radius: ${borderRadius};
        background-color: transparent;
        transform: translate(-50%, -50%);
        transition: ${transition};
      }

      &:checked,
      &[aria-checked='mixed'] {
        border-color: ${bgColorChecked};
      }

      &:checked:after {
        background-color: ${bgColorChecked};
        transition: ${transition};
      }
    `;
  }}
`;
