import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';
import { ContextualLoaderType } from '../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContextualLoaderProps
  extends Omit<LoaderProps, 'gradientConfig' | 'type'> {
  type?: ContextualLoaderType;
}

export const ContextualLoader: React.FC<ContextualLoaderProps> = ({
  alignItems,
  className,
  colorScheme = 'inherited',
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
}) => {
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
