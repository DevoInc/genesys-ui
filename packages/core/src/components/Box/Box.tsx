import * as React from 'react';
import { ILayoutBox } from '../../declarations';

import { StyledBox } from './StyledBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BoxProps extends ILayoutBox {}

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
      opacity,
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
    ref,
  ) => (
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
      opacity={opacity}
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
  ),
);

Box.displayName = 'Box';
