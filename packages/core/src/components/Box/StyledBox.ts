import styled from 'styled-components';
import type {
  ILayoutBoxCss,
  ILayoutTransientForStyled,
} from '../../declarations';
import { boxMixin } from '../../styled/mixins/components/boxMixin';

interface StyledBoxProps
  extends Omit<ILayoutBoxCss, 'display' | 'height' | 'width'>,
    ILayoutTransientForStyled {}

export const StyledBox = styled.div<StyledBoxProps>`
  ${({
    alignSelf,
    $display,
    flex,
    elevation,
    $height,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    overflow,
    overflowX,
    overflowY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    position,
    positionBottom,
    positionLeft,
    positionRight,
    positionTop,
    theme,
    cssTranslate,
    verticalAlign,
    visibility,
    $width,
    zIndex,
  }) =>
    boxMixin(theme)({
      alignSelf,
      $display,
      flex,
      elevation,
      $height,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      overflow,
      overflowX,
      overflowY,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      position,
      positionBottom,
      positionLeft,
      positionRight,
      positionTop,
      cssTranslate,
      verticalAlign,
      visibility,
      $width,
      zIndex,
    })}
`;
