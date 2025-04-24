import styled from 'styled-components';
import type { ILayoutBox } from '../../declarations';
import { boxMixin } from '../../styled';

export interface StyledFormProps {
  $flex?: ILayoutBox['flex'];
  $height?: ILayoutBox['height'];
  $marginBottom?: ILayoutBox['marginBottom'];
  $marginLeft?: ILayoutBox['marginLeft'];
  $marginRight?: ILayoutBox['marginRight'];
  $marginTop?: ILayoutBox['marginTop'];
  $maxHeight?: ILayoutBox['maxHeight'];
  $maxWidth?: ILayoutBox['maxWidth'];
  $minHeight?: ILayoutBox['minHeight'];
  $minWidth?: ILayoutBox['minWidth'];
  $width?: ILayoutBox['width'];
}

export const StyledForm = styled.form<StyledFormProps>`
  ${({
    $flex,
    $height,
    $marginBottom,
    $marginLeft,
    $marginRight,
    $marginTop,
    $maxHeight,
    $maxWidth,
    $minHeight,
    $minWidth,
    $width,
    theme,
  }) =>
    boxMixin(theme)({
      $flex,
      $height,
      $marginBottom,
      $marginLeft,
      $marginRight,
      $marginTop,
      $maxHeight,
      $maxWidth,
      $minHeight,
      $minWidth,
      $width,
    })}
`;
