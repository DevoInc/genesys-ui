import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import type { ILayoutBoxStyled } from '../../../declarations';
import { scrollbars } from '../scrollbars';
import {
  elevationBoxShadowMixin,
  elevationBorderMixin,
  elevationBorderRadiusMixin,
} from '../state';
import { getSpacingPropCss } from '../../../helpers';

export interface IBoxMixin extends ILayoutBoxStyled {}

/**
 * Get the box model styles to be used in Box and another layout component ones.
 *
 * @return object with the css.
 */
export const boxMixin =
  (theme: DefaultTheme) =>
  ({
    $alignSelf,
    $display,
    $flex,
    $elevation,
    $height,
    $margin,
    $marginBottom,
    $marginLeft,
    $marginRight,
    $marginTop,
    $maxHeight,
    $maxWidth,
    $minHeight,
    $minWidth,
    $opacity,
    $overflow,
    $overflowX,
    $overflowY,
    $padding,
    $paddingBottom,
    $paddingLeft,
    $paddingRight,
    $paddingTop,
    $position,
    $positionBottom,
    $positionLeft,
    $positionRight,
    $positionTop,
    $cssTranslate,
    $verticalAlign,
    $visibility,
    $width,
    $zIndex,
  }: IBoxMixin) => {
    const aliasTokens = theme.alias;
    const elevationTokens = aliasTokens.elevation;
    const hasBorder =
      $elevation && $elevation !== 'ground' && !$elevation.includes('sticky');
    const hasSpacing =
      $margin ||
      $marginTop ||
      $marginRight ||
      $marginRight ||
      $marginBottom ||
      $padding ||
      $paddingTop ||
      $paddingRight ||
      $paddingRight ||
      $paddingBottom;
    return css`
      /* position and layout */
      position: ${$position || ($elevation ? 'relative' : null)};
      top: ${$positionTop};
      right: ${$positionRight};
      bottom: ${$positionBottom};
      left: ${$positionLeft};
      z-index: ${$zIndex || elevationTokens.zIndex?.depth[$elevation]};
      flex: ${$flex};

      /* display and visibility */
      display: ${$display};
      transform: ${$cssTranslate && `translate(${$cssTranslate})`};
      visibility: ${$visibility};
      opacity: ${$opacity};
      vertical-align: ${$verticalAlign};

      /* clipping */
      overflow: ${$overflow};
      overflow-x: ${$overflowX};
      overflow-y: ${$overflowY};
      ${scrollbars({
        $trackRadius: !hasSpacing ? '0' : undefined,
        theme,
      })}

      /* elevation */
      ${elevationBoxShadowMixin(theme)($elevation)};
      ${elevationBorderMixin(theme)($elevation)};
      ${hasBorder && elevationBorderRadiusMixin(theme)($elevation)}

      /* box model */
      align-self: ${$alignSelf};
      margin: ${$margin && getSpacingPropCss(theme)($margin)};
      margin-top: ${$marginTop && getSpacingPropCss(theme)($marginTop)};
      margin-right: ${$marginRight && getSpacingPropCss(theme)($marginRight)};
      margin-bottom: ${$marginBottom &&
      getSpacingPropCss(theme)($marginBottom)};
      margin-left: ${$marginLeft && getSpacingPropCss(theme)($marginLeft)};
      width: ${$width};
      max-width: ${$maxWidth};
      min-width: ${$minWidth};
      height: ${$height};
      max-height: ${$maxHeight};
      min-height: ${$minHeight};
      padding: ${$padding && getSpacingPropCss(theme)($padding)};
      padding-top: ${$paddingTop && getSpacingPropCss(theme)($paddingTop)};
      padding-right: ${$paddingRight &&
      getSpacingPropCss(theme)($paddingRight)};
      padding-bottom: ${$paddingBottom &&
      getSpacingPropCss(theme)($paddingBottom)};
      padding-left: ${$paddingLeft && getSpacingPropCss(theme)($paddingLeft)};
    `;
  };
