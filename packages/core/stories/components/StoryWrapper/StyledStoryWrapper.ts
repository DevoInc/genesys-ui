import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  StyledBox,
  StyledBoxProps,
} from '../../../src/components/Box/StyledBox';

export interface StyledStoryWrapperProps extends StyledBoxProps {
  bgColor?: React.CSSProperties['backgroundColor'];
}

export const StyledStoryWrapper = styled(StyledBox)<StyledStoryWrapperProps>`
  ${({ bgColor, theme }) => {
    const defaultColor = theme.tokens.alias.color.background.surface.base.base;
    return css`
      background-color: ${bgColor || defaultColor};
    `;
  }};
`;
