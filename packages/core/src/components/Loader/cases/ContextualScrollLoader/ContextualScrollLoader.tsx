import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';
import { ContextualScrollLoaderSize } from '../../declarations';
import { getSizeByType } from '../../utils';
import { CmpSpacing } from '../../../../declarations';

export interface ContextualScrollLoaderProps
  extends Pick<
    LoaderProps,
    'className' | 'fixed' | 'iconComplete' | 'loadPercent' | 'zIndex'
  > {
  gradientHeight?: string;
  spinnerOffset?: CmpSpacing;
  size: ContextualScrollLoaderSize;
}

export const ContextualScrollLoader: React.FC<ContextualScrollLoaderProps> = ({
  className,
  fixed,
  gradientHeight,
  iconComplete,
  loadPercent,
  spinnerOffset = 'cmp-xs',
  size = 'md',
  zIndex,
  ...nativeProps
}) => {
  return (
    <Loader
      {...nativeProps}
      className={className}
      fixed={fixed}
      gradientConfig={{
        height: gradientHeight,
      }}
      iconComplete={iconComplete}
      justifyContent="flex-end"
      loadPercent={loadPercent}
      padding={`0 0 ${spinnerOffset} 0`}
      size={getSizeByType('spinner', size)}
      type="spinner"
      zIndex={zIndex}
    />
  );
};
