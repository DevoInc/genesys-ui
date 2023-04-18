import styled, { css } from 'styled-components';
import { FieldSize, FieldStatus } from '../../../';

export interface StyledInputControlIconProps {
  /** Size of the input: height, padding, font-size... etc. */
  size: FieldSize;
  /** This property defines the status color schema for the input */
  status: FieldStatus;
  /** If the icon is related with the input type */
  isTypeIcon?: boolean;
}

export const StyledInputControlIcon = styled.span<StyledInputControlIconProps>`
  ${({ isTypeIcon, size, status, theme }) => {
    const fieldTokens = theme.alias.fields;
    const fieldIconTokens = fieldTokens.icon;
    const position = fieldTokens.space.padding.hor[size];
    const fs = fieldIconTokens.size.square[size];

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
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

      ${isTypeIcon
        ? css`
            left: ${position};
          `
        : css`
            right: ${position};
          `};
    `;
  }};
`;
