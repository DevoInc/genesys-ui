import styled, { css } from 'styled-components';
import { ChipSize } from '../declarations';

export interface StyledChipIconProps {
  hasBoldIcon?: boolean;
  size: ChipSize;
}

export const StyledChipIcon = styled.i<StyledChipIconProps>`
  ${({ hasBoldIcon, size, theme }) => {
    const tokens = theme.cmp.chip.icon;
    return css`
      position: relative;
      font-size: ${tokens.typo.fontSize[size]};
      margin-left: ${tokens.space.offset[size]};
      margin-right: ${tokens.space.margin[size]};
      font-weight: ${hasBoldIcon && 'bold'};
    `;
  }}
`;
