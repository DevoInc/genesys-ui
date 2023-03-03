import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';

export interface GlobalLoaderProps
  extends Pick<LoaderProps, 'zIndex' | 'type' | 'className'>, // native
    GlobalAttrProps,
    GlobalAriaProps {}

export const GlobalLoader = ({
  className,
  type = 'logo',
  zIndex = 999999,
  ...nativeProps
}: GlobalLoaderProps) => (
  <Loader
    {...nativeProps}
    className={className}
    colorScheme={'dark'}
    fixed
    size={type === 'logo' ? 'md' : 'lg'}
    type={type}
    zIndex={zIndex}
  />
);
