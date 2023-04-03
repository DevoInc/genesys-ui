import styled, { css } from 'styled-components';
import { FieldSize, FieldStatus } from '../../../';
import { flexMixin } from '../../../styled/mixins/utilsMixins';

export interface StyledInputControlIconProps {
  /** Size of the input: height, padding, font-size... etc. */
  size: FieldSize;
  /** This property defines the status color schema for the input */
  status: FieldStatus;
  /** Icon type */
  typeIcon?: string; //TODO: review this type
}

export const StyledInputControlIcon = styled.span<StyledInputControlIconProps>`
  ${({ size, status, theme, typeIcon }) => {
    const fieldTokens = theme.alias.fields;
    const fieldIconTokens = fieldTokens.icon;
    const position = fieldTokens.space.padding.hor[size];
    const fs = fieldIconTokens.size.square[size];

    return css`
      ${flexMixin({ ai: 'center', dis: 'flex', jc: 'center' })};
      position: absolute;
      bottom: 0;
      z-index: 2;
      transition: all ease 0.3s;
      height: 100%;
      font-size: ${fs};
      color: ${status === 'base'
        ? fieldIconTokens.color.text[status]
        : status && fieldTokens.color.border[status].enabled};
      pointer-events: none;

      ${typeIcon
        ? css`
            left: ${position};
          `
        : css`
            right: ${position};
          `};
    `;
  }};
`;
