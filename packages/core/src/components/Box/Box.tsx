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
  LayoutTransientProps,
  MouseEventAttrProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

import { StyledBox, StyledBoxProps } from './StyledBox';

export interface BoxProps
  extends Omit<StyledBoxProps, '$display' | '$height' | '$width'>,
    LayoutTransientProps,
    // native props
    StyledPolymorphicProps,
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
  /** Css display */
  display?: React.CSSProperties['display'];
  /** Children */
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  children,
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
  cssTranslate,
  verticalAlign,
  visibility,
  width,
  zIndex,
  ...nativeProps
}) => {
  return (
    <StyledBox
      {...nativeProps}
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
      cssTranslate={cssTranslate}
      verticalAlign={verticalAlign}
      visibility={visibility}
      $width={width}
      zIndex={zIndex}
    >
      {children}
    </StyledBox>
  );
};
