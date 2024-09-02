import * as React from 'react';

import { StyledDivider } from './StyledDivider';
import type { IStyledOverloadCss } from '../../declarations';
import { IDivider } from './declarations';

export interface DividerProps extends IDivider, IStyledOverloadCss {}

export const Divider: React.FC<DividerProps> = ({
  colorScheme = 'base',
  customColor,
  height,
  margin,
  style,
  vertical = false,
  width,
}) => (
  <StyledDivider
    role={'separator'}
    $colorScheme={colorScheme}
    css={style}
    $customColor={customColor}
    $height={height}
    $margin={margin}
    $vertical={vertical}
    $width={width}
  />
);
