import styled, { css } from 'styled-components';
import { boxMixin, BoxMixinProps } from '../../styled/';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledBoxProps extends Omit<BoxMixinProps, 'theme'> {}

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
    return css`
      ${boxMixin({
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
      })}
    `;
  }}
`;
