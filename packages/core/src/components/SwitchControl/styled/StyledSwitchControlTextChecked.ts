import styled, { css } from 'styled-components';

import type { ISwitch } from '../declarations';
import { switchControlTextMixin } from '../helpers';

interface StyledSwitchControlTextCheckedProps {
  $checked?: ISwitch['checked'];
}
export const StyledSwitchControlTextChecked = styled.span<StyledSwitchControlTextCheckedProps>`
  ${({ $checked, theme }) => css`
    ${switchControlTextMixin({ theme })};
    justify-content: ${!$checked && 'flex-end'};
    ${!$checked &&
    css`
      position: absolute;
      left: -9999px;
    `};
  `};
`;
