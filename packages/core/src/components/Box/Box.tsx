import * as React from 'react';

import type { IDataAttrs, ILayoutBox } from '../../declarations';
import type { Resolve } from '../../typeFunctions';
import { StyledBox } from './StyledBox';

export interface BoxProps extends IDataAttrs, ILayoutBox {}

export const Box = React.forwardRef<HTMLDivElement, Resolve<BoxProps>>(
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
      style,
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
      ref={ref}
      $alignSelf={alignSelf}
      css={style}
      $cssTranslate={cssTranslate}
      $display={display}
      $elevation={elevation}
      $flex={flex}
      $height={height}
      $margin={margin}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $marginTop={marginTop}
      $maxHeight={maxHeight}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      $minWidth={minWidth}
      $opacity={opacity}
      $overflow={overflow}
      $overflowX={overflowX}
      $overflowY={overflowY}
      $padding={padding}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      $paddingTop={paddingTop}
      $position={position}
      $positionBottom={positionBottom}
      $positionLeft={positionLeft}
      $positionRight={positionRight}
      $positionTop={positionTop}
      title={tooltip}
      $verticalAlign={verticalAlign}
      $visibility={visibility}
      $width={width}
      $zIndex={zIndex}
    >
      {children}
    </StyledBox>
  ),
);
