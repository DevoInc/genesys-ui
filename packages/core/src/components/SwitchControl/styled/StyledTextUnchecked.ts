import styled, { css } from 'styled-components';

import { StyledText } from './';

interface StyledTextCheckedProps {
  $checked?: boolean;
}

export const StyledTextUnchecked = styled(StyledText)<StyledTextCheckedProps>`
  ${({ $checked }) => css`
    justify-content: ${!$checked && 'flex-start'};
    ${$checked &&
    css`
      position: absolute;
      left: -9999px;
    `};
  `};
`;
