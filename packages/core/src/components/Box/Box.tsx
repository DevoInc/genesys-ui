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
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

import { StyledBox, StyledBoxProps } from './StyledBox';

export interface CommonBoxProps
  extends LayoutTransientProps,
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

export const Box: React.FC<BoxProps> = ({
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
}) => {
  return (
    <StyledBox
      {...nativeProps}
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
      title={tooltip}
      verticalAlign={verticalAlign}
      visibility={visibility}
      $width={width}
      zIndex={zIndex}
    >
      {children}
    </StyledBox>
  );
};
