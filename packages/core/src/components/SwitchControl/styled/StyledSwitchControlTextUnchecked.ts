import styled, { css } from 'styled-components';

import { switchControlTextMixin } from '../helpers';

interface StyledSwitchControlTextUncheckedProps {
  $checked?: boolean;
}

export const StyledSwitchControlTextUnchecked = styled.span<StyledSwitchControlTextUncheckedProps>`
  ${({ $checked, theme }) => css`
    ${switchControlTextMixin({ theme })};
    justify-content: ${!$checked && 'flex-start'};
    ${$checked &&
    css`
      position: absolute;
      left: -9999px;
    `};
  `};
`;
