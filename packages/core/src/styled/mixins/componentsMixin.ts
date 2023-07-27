import * as React from 'react';
import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import {
  ControlWidth,
  FieldSize,
  FieldStatus,
  getFieldState,
  LayoutCommonProps,
} from '../../';
import { scrollbars, disabledMixin } from '.';
import { getFieldControlTypo } from '../../components';
import { getSpacingPropCss } from '../../utils/spacing';

interface CheckRadioProps {
  disabled?: boolean;
  size?: FieldSize;
  status?: FieldStatus;
  theme: DefaultTheme;
}

/**
 * Get the checkbox and radio common tokens.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.status The status of the component: error, success... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the specific tokens.
 */
export const getCheckRadioTokens = ({
  size = 'md',
  status = 'base',
  theme,
}: CheckRadioProps) => {
  const fieldTokens = theme.alias.fields;
  return {
    borderColor: fieldTokens.color.border[status].enabled,
    borderColorChecked: fieldTokens.color.border[status].checked,
    borderColorHovered: fieldTokens.color.border[status].hovered,
    borderColorFocused: fieldTokens.color.border[status].focused,
    borderWidth: fieldTokens.shape.borderSize.check,
    bgColor: fieldTokens.color.background[status].enabled,
    boxShadow: fieldTokens.elevation.boxShadow[status].focused,
    bgColorChecked: fieldTokens.color.background[status].checked,
    disabledOpacity: fieldTokens.shape.opacity.disabled,
    square: fieldTokens.size.square[size],
    textColor: fieldTokens.color.text[status].checked,
    animationTime: fieldTokens.mutation.transitionDuration,
  };
};

/**
 * Get the checkbox and radio common styles.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.status The status of the component: error, success... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const checkRadioMixin = ({
  size = 'md',
  status = 'base',
  theme,
}: CheckRadioProps) => {
  const checkRadioTokens = getCheckRadioTokens({
    size,
    status,
    theme,
  });
  const square = checkRadioTokens.square;
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: border-color ease-in-out ${checkRadioTokens.animationTime};
    width: ${square};
    height: ${square};
    line-height: ${square};
    border: solid ${checkRadioTokens.borderWidth}
      ${checkRadioTokens.borderColor};
    background-color: ${checkRadioTokens.bgColor};
    color: ${checkRadioTokens.textColor};
    cursor: pointer;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:disabled {
      background-clip: padding-box;
      cursor: not-allowed;
      opacity: ${checkRadioTokens.disabledOpacity};

      &:not(:checked) {
        background-color: ${checkRadioTokens.borderColor};
      }
    }

    &:not(:checked):not(:disabled):hover,
    &:not(:checked):not(:disabled):hover {
      border-color: ${checkRadioTokens.borderColorHovered};
    }

    &:focus-visible {
      box-shadow: ${checkRadioTokens.boxShadow};
      border-color: ${checkRadioTokens.borderColorFocused};
      outline: none;
    }
  `;
};

/**
 * Get the button reset styles
 *
 * @return object with the css.
 */
export const btnResetMixin = css`
  margin: 0;
  padding: 0;
  width: auto;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  line-height: normal;
  background-color: transparent;
  border: none;
  overflow: visible;
  cursor: pointer;
  user-select: none;
  -webkit-font-smoothing: inherit;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: inherit;
    cursor: not-allowed;
  }
`;

interface commonInputControlMixinProps {
  disabled?: boolean;
  inputWidth?: ControlWidth;
  readOnly?: boolean;
  $size?: FieldSize;
  status?: FieldStatus;
  theme: DefaultTheme;
}

/**
 * Get the InputControl common styles to be used in TextAreaControl too for example.
 *
 * @param props The object param
 * @param props.disabled If the state of the element is disabled
 * @param props.inputWidth Predefined width of the input. It should reflect the length of the content you expect the user to enter.
 * @param props.readOnly If the state of the element is readonly
 * @param props.$size The size of the element
 * @param props.status The status of the component: error, success... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const commonInputControlMixin = ({
  disabled,
  inputWidth,
  readOnly,
  $size = 'md',
  status = 'base',
  theme,
}: commonInputControlMixinProps) => {
  const state = getFieldState({ readOnly });
  const aliasTokens = theme.alias;
  const fieldTokens = aliasTokens.fields;
  const inputBorderRadius = fieldTokens.shape.borderRadius;
  const inputWidthEval = getControlWidth({ theme, controlWidth: inputWidth });
  const inputHeight = fieldTokens.size.height[$size];
  const inputHorPadding = fieldTokens.space.padding.hor[$size];
  return css`
    ${getFieldControlTypo({ theme, size: $size })};
    display: flex;
    appearance: none;
    position: relative;
    transition: border ${fieldTokens.mutation.transitionDuration} ease-in-out,
      box-shadow ${fieldTokens.mutation.transitionDuration} ease-in-out;
    outline: none;
    border-width: ${fieldTokens.shape.borderSize.base};
    border-style: solid;
    border-color: ${fieldTokens.color.border[status][state]};
    border-radius: ${inputBorderRadius};
    width: ${inputWidthEval || '100%'};
    height: ${inputHeight};
    padding: 0 ${inputHorPadding};
    background-color: ${fieldTokens.color.background[status][state]};
    color: ${fieldTokens.color.text[status][state]};

    ${disabled &&
    css`
      ${disabledMixin(theme)};
    `};

    ${!disabled &&
    !readOnly &&
    css`
      &:hover {
        border-color: ${fieldTokens.color.border[status].hovered};
        color: ${fieldTokens.color.text[status].hovered};
      }

      &:focus {
        box-shadow: ${fieldTokens.elevation.boxShadow[status].focused};
        border-color: ${fieldTokens.color.border[status].focused};
        color: ${fieldTokens.color.text[status].focused};
      }
    `}

    &::placeholder {
      color: ${fieldTokens.color.text[status].placeholder};
    }
  `;
};

interface GetControlWidthProps {
  controlWidth: ControlWidth;
  theme: DefaultTheme;
}

/**
 * Get the css value with the pre-defined width of a field control (input, select...).
 *
 * @param props The object param
 * @param props.controlWidth The pre-defined or defined directly value of the field control width.
 * @param props.theme The common theme object with all the tokens
 * @return css value based in a design token from theme.
 */
export const getControlWidth = ({
  theme,
  controlWidth,
}: GetControlWidthProps) => {
  return theme.alias.fields.size.width[controlWidth] || controlWidth;
};

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
