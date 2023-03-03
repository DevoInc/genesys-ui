import * as React from 'react';

import { StyledDivider, StyledDividerProps } from './StyledDivider';

export interface DividerProps
  extends Omit<StyledDividerProps, '$height' | '$width'> {
  /** Css height */
  height?: React.CSSProperties['height'];
  /** Css width */
  width?: React.CSSProperties['width'];
}

export const Divider: React.FC<DividerProps> = ({
  colorScheme = 'base',
  customColor,
  height,
  margin,
  vertical = false,
  width,
}) => (
  <StyledDivider
    colorScheme={colorScheme}
    customColor={customColor}
    $height={height}
    margin={margin}
    vertical={vertical}
    $width={width}
  />
);
