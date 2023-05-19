import * as React from 'react';

import { StyledDivider, StyledDividerProps } from './StyledDivider';
import { StyledOverloadCssProps } from '../../declarations';

export interface DividerProps
  extends Omit<StyledDividerProps, '$height' | '$width'>,
    StyledOverloadCssProps {
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
  styles,
  vertical = false,
  width,
}) => (
  <StyledDivider
    colorScheme={colorScheme}
    css={styles}
    customColor={customColor}
    $height={height}
    margin={margin}
    vertical={vertical}
    $width={width}
  />
);
