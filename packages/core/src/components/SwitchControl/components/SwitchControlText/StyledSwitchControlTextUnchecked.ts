import styled, { css } from 'styled-components';

import { switchControlTextMixin } from '../../helpers';
import type { ISwitch } from '../../declarations';

interface StyledSwitchControlTextUncheckedProps {
  $checked?: ISwitch['checked'];
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
