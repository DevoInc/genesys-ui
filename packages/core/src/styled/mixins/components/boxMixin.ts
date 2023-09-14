import { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import type { LayoutCommonProps } from '../../../declarations';
import { scrollbars } from '../scrollbars';
import {
  elevationBoxShadowMixin,
  elevationBorderMixin,
  elevationBorderRadiusMixin,
} from '../state';
import { getSpacingPropCss } from '../../../utils/spacing';

export interface BoxMixinProps extends LayoutCommonProps {
  /** The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex. */
  $display?: React.CSSProperties['display'];
  /** Css height */
  $height?: React.CSSProperties['height'];
  /** Css width */
  $width?: React.CSSProperties['width'];
}

/**
 * Get the box model styles to be used in Box and another layout component ones.
 *
 * @return object with the css.
 */
export const boxMixin =
  (theme: DefaultTheme) =>
  ({
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
  }: BoxMixinProps) => {
    const aliasTokens = theme.alias;
    const elevationTokens = aliasTokens.elevation;
    const hasBorder =
      elevation && elevation !== 'ground' && !elevation.includes('sticky');
    const hasSpacing =
      margin ||
      marginTop ||
      marginRight ||
      marginRight ||
      marginBottom ||
      padding ||
      paddingTop ||
      paddingRight ||
      paddingRight ||
      paddingBottom;
    return css`
      /* position and layout */
      position: ${position || elevation ? 'relative' : null};
      top: ${positionTop};
      right: ${positionRight};
      bottom: ${positionBottom};
      left: ${positionLeft};
      z-index: ${zIndex || elevationTokens.zIndex?.depth[elevation]};
      flex: ${flex};

      /* display and visibility */
      display: ${$display};
      transform: ${cssTranslate && `translate(${cssTranslate})`};
      /* visibility: ${visibility}; */
      vertical-align: ${verticalAlign};

      /* clipping */
      overflow: ${overflow || (hasBorder && 'hidden')};
      overflow-x: ${overflowX};
      overflow-y: ${overflowY};
      ${scrollbars({
        trackRadius: !hasSpacing ? '0' : undefined,
        theme,
      })}

      /* elevation */
      ${elevationBoxShadowMixin(theme)(elevation)};
      ${elevationBorderMixin(theme)(elevation)};
      ${hasBorder && elevationBorderRadiusMixin(theme)(elevation)}

      /* box model */
      align-self: ${alignSelf};
      margin: ${margin && getSpacingPropCss(theme)(margin)};
      margin-top: ${marginTop && getSpacingPropCss(theme)(marginTop)};
      margin-right: ${marginRight && getSpacingPropCss(theme)(marginRight)};
      margin-bottom: ${marginBottom && getSpacingPropCss(theme)(marginBottom)};
      margin-left: ${marginLeft && getSpacingPropCss(theme)(marginLeft)};
      width: ${$width};
      max-width: ${maxWidth};
      min-width: ${minWidth};
      height: ${$height};
      max-height: ${maxHeight};
      min-height: ${minHeight};
      padding: ${padding && getSpacingPropCss(theme)(padding)};
      padding-top: ${paddingTop && getSpacingPropCss(theme)(paddingTop)};
      padding-right: ${paddingRight && getSpacingPropCss(theme)(paddingRight)};
      padding-bottom: ${paddingBottom &&
      getSpacingPropCss(theme)(paddingBottom)};
      padding-left: ${paddingLeft && getSpacingPropCss(theme)(paddingLeft)};
    `;
  };
