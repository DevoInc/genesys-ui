import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContextualLoaderProps
  extends Omit<LoaderProps, 'gradientConfig'> {}

export const ContextualLoader = ({
  alignItems,
  className,
  colorScheme = 'light',
  fixed,
  iconComplete,
  justifyContent,
  loadPercent,
  opaque,
  padding,
  size = 'md',
  type = 'spinner',
  zIndex,
  ...nativeProps
}: ContextualLoaderProps) => {
  return (
    <Loader
      {...nativeProps}
      alignItems={alignItems}
      className={className}
      colorScheme={colorScheme}
      fixed={fixed}
      iconComplete={iconComplete}
      justifyContent={justifyContent}
      loadPercent={loadPercent}
      opaque={opaque}
      padding={padding}
      size={size}
      type={type}
      zIndex={zIndex}
    />
  );
};
