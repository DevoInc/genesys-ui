import styled, { css } from 'styled-components';

import { ButtonSize } from '../../declarations';
import type { StyledPolymorphicProps } from '../../../../declarations';

export interface StyledButtonIconProps extends StyledPolymorphicProps {
  /** Icon needs a higher font-weight */
  hasBoldIcon?: boolean;
  /** Sets padding, line-height, font-size, etc. */
  size?: ButtonSize;
}

export const StyledButtonIcon = styled.i<StyledButtonIconProps>`
  ${({ hasBoldIcon, size, theme }) => {
    const tokens = theme.cmp.button.icon;
    return css`
      position: relative;
      transition: transform ease 0.15s;
      font-size: ${tokens.typo.fontSize[size]};
      font-weight: ${hasBoldIcon && 'bold'};
    `;
  }}
`;
