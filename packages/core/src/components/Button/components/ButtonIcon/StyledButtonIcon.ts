import * as React from 'react';
import styled, { css } from 'styled-components';

import { ButtonSize } from '../../declarations';

export interface StyledButtonIconProps {
  /** Polymorphic prop to create a different tag or styled component
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: string | React.ComponentType<any>;
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
