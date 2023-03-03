import * as React from 'react';
import styled, { css } from 'styled-components';

import { getSpacingPropCss } from '../../utils/spacing';
import { scrollbars } from '../../styled/mixins/scrollbars';
import { LayoutCommonProps } from '../../declarations';

export interface StyledBoxProps extends LayoutCommonProps {
  /** The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex. */
  $display?: React.CSSProperties['display'];
  /** Css height */
  $height?: React.CSSProperties['height'];
  /** Css width */
  $width?: React.CSSProperties['width'];
}

export const StyledBox = styled.div<StyledBoxProps>`
  ${({
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
  }) => {
    const aliasTokens = theme.tokens.alias;
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

    const getBoxShadow = (elevationProp) => {
      const { boxShadow } = elevationTokens;

      if (!boxShadow) return null;

      if (elevationProp?.includes('sticky')) {
        const stickyOptions = boxShadow.depth.sticky;

        if (elevationProp === 'stickyTop') return stickyOptions.top;
        if (elevationProp === 'stickyRight') return stickyOptions.right;
        if (elevationProp === 'stickyLeft') return stickyOptions.left;

        return stickyOptions.bottom;
      }

      return boxShadow.depth[elevationProp] || null;
    };

    return css`
      // position and layout
      position: ${position};
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
      box-shadow: ${getBoxShadow(elevation)};
      border-radius: ${hasBorder && aliasTokens.shape.borderRadius.elevated};

      // box model
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
      padding-bottom: ${paddingBottom &&
      getSpacingPropCss(paddingBottom, theme)};
      padding-left: ${paddingLeft && getSpacingPropCss(paddingLeft, theme)};
    `;
  }}
`;
