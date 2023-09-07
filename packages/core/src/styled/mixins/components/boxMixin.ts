import { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import type { LayoutCommonProps } from '../../../declarations';
import { scrollbars } from '../scrollbars';
import { elevationMixin } from '../state';
import { getSpacingPropCss } from '../../../utils/spacing';

export interface BoxMixinProps extends LayoutCommonProps {
  /** The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex. */
  $display?: React.CSSProperties['display'];
  /** Css height */
  $height?: React.CSSProperties['height'];
  /** Css width */
  $width?: React.CSSProperties['width'];
  theme: DefaultTheme;
}

/**
 * Get the box model styles to be used in Box and another layout component ones.
 *
 * @return object with the css.
 */
export const boxMixin = ({
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
  theme,
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
    // position and layout
    position: ${position || elevation ? 'relative' : null};
    top: ${positionTop};
    right: ${positionRight};
    bottom: ${positionBottom};
    left: ${positionLeft};
    z-index: ${zIndex || elevationTokens.zIndex?.depth[elevation]};
    flex: ${flex};

    // display and visibility
    display: ${$display};
    transform: ${cssTranslate && `translate(${cssTranslate})`};
    //visibility: ${visibility};
    vertical-align: ${verticalAlign};

    // clipping
    overflow: ${overflow || (hasBorder && 'hidden')};
    overflow-x: ${overflowX};
    overflow-y: ${overflowY};
    ${scrollbars({
      trackRadius: !hasSpacing ? '0' : undefined,
      theme,
    })}

    // elevation
    ${elevationMixin({ theme, elevation, prop: 'boxShadow' })};
    ${elevationMixin({ theme, elevation, prop: 'border' })};
    ${hasBorder && elevationMixin({ theme, elevation, prop: 'borderRadius' })}

    // box model
    align-self: ${alignSelf};
    margin: ${margin && getSpacingPropCss(margin, theme)};
    margin-top: ${marginTop && getSpacingPropCss(marginTop, theme)};
    margin-right: ${marginRight && getSpacingPropCss(marginRight, theme)};
    margin-bottom: ${marginBottom && getSpacingPropCss(marginBottom, theme)};
    margin-left: ${marginLeft && getSpacingPropCss(marginLeft, theme)};
    width: ${$width};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    height: ${$height};
    max-height: ${maxHeight};
    min-height: ${minHeight};
    padding: ${padding && getSpacingPropCss(padding, theme)};
    padding-top: ${paddingTop && getSpacingPropCss(paddingTop, theme)};
    padding-right: ${paddingRight && getSpacingPropCss(paddingRight, theme)};
    padding-bottom: ${paddingBottom && getSpacingPropCss(paddingBottom, theme)};
    padding-left: ${paddingLeft && getSpacingPropCss(paddingLeft, theme)};
  `;
};
