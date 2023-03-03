import styled, { css } from 'styled-components';

import { FieldSize, FieldStatus } from '../../declarations';

import {
  checkRadioMixin,
  getCheckRadioTokens,
} from '../../styled/mixins/componentsMixin';

export interface StyledRadioControlProps {
  /** The size for the checkbox. It affects to its width, height, font-size... etc. */
  $size?: FieldSize;
  /** The status for the checkbox: success, error... etc. */
  status?: FieldStatus;
}

export const StyledRadioControl = styled.input.attrs({
  type: 'radio',
})<StyledRadioControlProps>`
  ${({ disabled = false, $size = 'md', status = 'base', theme }) => {
    const cmpTokens = theme.tokens.cmp.radio;
    const controlTokens = cmpTokens.control;
    const markerTokens = cmpTokens.controlMarker;
    const checkRadioTokens = getCheckRadioTokens({ status, theme });
    const markerSquare = markerTokens.size.square[$size];
    const borderRadius = controlTokens.shape.borderRadius;
    const transition = `all ease-in-out ${checkRadioTokens.animationTime}`;

    return css`
      ${checkRadioMixin({ disabled, size: $size, status, theme })};
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
        border-color: ${checkRadioTokens.borderColorChecked};
      }

      &:checked:after {
        background-color: ${checkRadioTokens.bgColorChecked};
        transition: ${transition};
      }
    `;
  }}
`;
