import * as React from 'react';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

import {
  StyledSpinnerLoaderSvg,
  StyledSpinnerLoaderSvgProps,
  StyledSpinnerLoaderCircle,
  StyledSpinnerLoaderCircleProps,
  StyledSpinnerLoaderCircleAnimated,
} from './styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SpinnerLoaderProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledSpinnerLoaderSvgProps,
    StyledSpinnerLoaderCircleProps {}

export const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  colorScheme = 'dark',
  size = 'md',
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledSpinnerLoaderSvg
      {...restNativeProps}
      colorScheme={colorScheme}
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
