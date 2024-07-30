import * as React from 'react';

import type {
  IDataAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import type { TSpinnerColorScheme, TSpinnerSize } from './declarations';
import { StyledSpinnerLoaderSvg } from './StyledSpinnerLoaderSvg';
import { StyledSpinnerLoaderCircle } from './StyledSpinnerLoaderCircle';
import { StyledSpinnerLoaderCircleAnimated } from './StyledSpinnerLoaderCircleAnimated';

export interface SpinnerLoaderProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IDataAttrs {
  colorScheme?: TSpinnerColorScheme;
  size?: TSpinnerSize;
}

export const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
  style,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledSpinnerLoaderSvg
      {...restNativeProps}
      colorScheme={colorScheme}
      css={style}
      size={size}
      title={tooltip}
      viewBox={'0 0 50 50'}
    >
      <StyledSpinnerLoaderCircle
        colorScheme={colorScheme}
        cx={25}
        cy={25}
        r={22}
        strokeWidth={6}
        fill={'none'}
      />
      <StyledSpinnerLoaderCircleAnimated
        colorScheme={colorScheme}
        cx={25}
        cy={25}
        r={22}
        strokeWidth={6}
        fill={'none'}
      />
    </StyledSpinnerLoaderSvg>
  );
};
