import * as React from 'react';
import styled, { css } from 'styled-components';

import { boxMixin, type ILayoutBoxCss } from '../../../src';

export interface StyledStoryWrapperProps {
  $margin?: ILayoutBoxCss['margin'];
  $maxHeight?: ILayoutBoxCss['maxHeight'];
  $maxWidth?: ILayoutBoxCss['maxWidth'];
  $minHeight?: ILayoutBoxCss['minHeight'];
  $minWidth?: ILayoutBoxCss['minWidth'];
  $overflow?: ILayoutBoxCss['overflow'];
  $overflowX?: ILayoutBoxCss['overflowX'];
  $overflowY?: ILayoutBoxCss['overflowY'];
  $padding?: ILayoutBoxCss['padding'];
  $position?: ILayoutBoxCss['position'];
  $positionBottom?: ILayoutBoxCss['positionBottom'];
  $positionLeft?: ILayoutBoxCss['positionLeft'];
  $positionRight?: ILayoutBoxCss['positionRight'];
  $positionTop?: ILayoutBoxCss['positionTop'];
  $cssTranslate?: ILayoutBoxCss['cssTranslate'];
  $visibility?: ILayoutBoxCss['visibility'];
  $zIndex?: ILayoutBoxCss['zIndex'];
  $bgColor?: React.CSSProperties['backgroundColor'];
}

export const StyledStoryWrapper = styled.div<StyledStoryWrapperProps>`
  ${({ $bgColor, theme, ...boxMixinProps }) => {
    const defaultColor = theme.alias.color.background.surface.base.base;
    return css`
      ${boxMixin(theme)(boxMixinProps)};
      background-color: ${$bgColor || defaultColor};
    `;
  }};
`;
