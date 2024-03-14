import * as React from 'react';

import type {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { TSpinnerColorScheme, TSpinnerSize } from './declarations';

import {
  StyledSpinnerLoaderSvg,
  StyledSpinnerLoaderCircle,
  StyledSpinnerLoaderCircleAnimated,
} from './styled';

export interface SpinnerLoaderProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  colorScheme?: TSpinnerColorScheme;
  size?: TSpinnerSize;
}

export const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
  styles,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledSpinnerLoaderSvg
      {...restNativeProps}
      colorScheme={colorScheme}
      css={styles}
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
