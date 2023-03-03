import styled, { css } from 'styled-components';

import { StyledText } from './';

interface StyledTextCheckedProps {
  $checked?: boolean;
}
export const StyledTextChecked = styled(StyledText)<StyledTextCheckedProps>`
  ${({ $checked }) => css`
    justify-content: ${!$checked && 'flex-end'};
    ${!$checked &&
    css`
      position: absolute;
      left: -9999px;
    `};
  `};
`;
