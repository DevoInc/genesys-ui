import styled, { css } from 'styled-components';

import { FieldSize, FieldStatus, getFieldStatus } from '@devoinc/genesys-ui';

interface StyledInputIconProps {
  combined?: any;
  fadeEffect?: boolean;
  size: FieldSize;
  status?: FieldStatus;
}

export const StyledInputIcon = styled.i<StyledInputIconProps>`
  ${({ combined, fadeEffect, size, status, theme }) => {
    const statusEval = getFieldStatus(status);
    const utilTokens = theme.tokens.alias.fields;
    const utilIconTokens = utilTokens.icon;
    const position = utilTokens.space.padding.hor[size];
    const fs = utilIconTokens.size.square[size];
    const inputPadding = css`calc(${fs} + ${position} * 2)`;

    return css`
      z-index: 1;
      position: absolute;
      ${combined &&
      combined.element &&
      (combined.direction !== 'left' || !combined.direction)
        ? `left: ${position};`
        : `right: ${position};`};
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: ${fadeEffect && '0'};
      transition: all ease 0.3s;
      height: 100%;
      font-size: ${fs};
      color: ${statusEval === 'base'
        ? utilIconTokens.color.text[statusEval]
        : utilTokens.color.border[statusEval].enabled};
      pointer-events: none;

      *:hover > &,
      *:focus > & {
        opacity: 1;
      }

      &&& ~ input {
        ${combined &&
        combined.element &&
        (combined.direction !== 'left' || !combined.direction)
          ? css`
              padding-left: ${inputPadding};
            `
          : css`
              padding-right: ${inputPadding};
            `};
      }
    `;
  }};
`;
