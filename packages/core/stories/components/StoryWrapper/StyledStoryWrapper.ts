import * as React from 'react';
import styled, { css } from 'styled-components';

import { boxMixin, type IBoxMixin } from '../../../src';

export interface StyledStoryWrapperProps extends Omit<IBoxMixin, 'theme'> {
  bgColor?: React.CSSProperties['backgroundColor'];
}

export const StyledStoryWrapper = styled.div<StyledStoryWrapperProps>`
  ${({ bgColor, theme, ...boxMixinProps }) => {
    const defaultColor = theme.alias.color.background.surface.base.base;
    return css`
      ${boxMixin(theme)(boxMixinProps)};
      background-color: ${bgColor || defaultColor};
    `;
  }};
`;
