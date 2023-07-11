import * as React from 'react';
import {
  ContainerEventAttrProps,
  DragAndDropAriaProps,
  DragDropEventAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAriaProps,
  LayoutAttrProps,
  LayoutCommonProps,
  LayoutTransientProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

import { StyledBox, StyledBoxProps } from './StyledBox';

export interface CommonBoxProps
  extends LayoutTransientProps,
    LayoutCommonProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    DragAndDropAriaProps,
    LayoutAttrProps,
    LayoutAriaProps,
    Pick<TriggerAriaProps, 'aria-expanded'>,
    ContainerEventAttrProps,
    FocusEventAttrProps,
    DragDropEventAttrProps,
    MouseEventAttrProps {
  /** Children */
  children?: React.ReactNode;
}

export interface BoxProps
  extends StyledOverloadCssProps,
    CommonBoxProps,
    Omit<StyledBoxProps, '$display' | '$height' | '$width'> {
  /** Css display */
  display?: React.CSSProperties['display'];
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      alignSelf,
      children,
      cssTranslate,
      display,
      elevation,
      flex,
      height,
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
      styles,
      tooltip,
      verticalAlign,
      visibility,
      width,
      zIndex,
      ...nativeProps
    },
    ref
  ) => {
    return (
      <StyledBox
        {...nativeProps}
        alignSelf={alignSelf}
        css={styles}
        cssTranslate={cssTranslate}
        $display={display}
        elevation={elevation}
        flex={flex}
        $height={height}
        margin={margin}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        overflow={overflow}
        overflowX={overflowX}
        overflowY={overflowY}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        position={position}
        positionBottom={positionBottom}
        positionLeft={positionLeft}
        positionRight={positionRight}
        positionTop={positionTop}
        ref={ref}
        title={tooltip}
        verticalAlign={verticalAlign}
        visibility={visibility}
        $width={width}
        zIndex={zIndex}
      >
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = 'Box';
