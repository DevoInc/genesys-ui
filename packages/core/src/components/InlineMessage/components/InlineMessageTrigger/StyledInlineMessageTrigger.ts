import styled, { css } from 'styled-components';

import { ButtonExpandableState } from '../../../Button';

import { StyledParagraph } from '../../../Typography/StyledTypography';
import { btnResetMixin } from '../../../Button/helpers';

export interface StyledInlineMessageTriggerProps {
  state?: ButtonExpandableState;
}

export const StyledInlineMessageTrigger = styled.button<StyledInlineMessageTriggerProps>`
  ${({ state }) => css`
    ${btnResetMixin};
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      ${StyledParagraph} {
        text-decoration: underline;
      }
    }

    ${StyledParagraph} {
      opacity: ${state === 'disabled' && 0.4};
      font-weight: 700;
      text-decoration: ${(state === 'hovered' || state === 'focused') &&
      'underline'};
    }
  `};
`;
