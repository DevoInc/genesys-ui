import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';

export interface GlobalLoaderProps
  extends Pick<LoaderProps, 'zIndex' | 'className' | 'fixed'>, // native
    GlobalAttrProps,
    GlobalAriaProps {}

export const GlobalLoader: React.FC<GlobalLoaderProps> = ({
  className,
  fixed = true,
  zIndex = 999999,
  ...nativeProps
}) => (
  <Loader
    {...nativeProps}
    className={className}
    colorScheme={'dark'}
    fixed={fixed}
    zIndex={zIndex}
  />
);
