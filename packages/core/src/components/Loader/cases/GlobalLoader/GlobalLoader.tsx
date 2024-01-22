import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';
import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';

export interface GlobalLoaderProps
  extends Omit<LoaderProps, 'gradientConfig' | 'type'>, // native
    GlobalAttrProps,
    GlobalAriaProps {}

export const GlobalLoader: React.FC<GlobalLoaderProps> = ({
  fixed = true,
  styles,
  subcomponentStyles,
  zIndex = 999999,
  ...nativeProps
}) => (
  <Loader
    {...nativeProps}
    {...(styles ? { styles } : { subcomponentStyles })}
    colorScheme={'dark'}
    fixed={fixed}
    zIndex={zIndex}
  />
);
