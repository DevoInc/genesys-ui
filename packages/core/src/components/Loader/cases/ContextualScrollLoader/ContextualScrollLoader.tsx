import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';
import {
  ContextualScrollLoaderSize,
  ContextualScrollLoaderType,
} from '../../declarations';
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
  type: ContextualScrollLoaderType;
}

export const ContextualScrollLoader: React.FC<ContextualScrollLoaderProps> = ({
  className,
  fixed,
  gradientHeight,
  iconComplete,
  loadPercent,
  spinnerOffset = 'cmp-xs',
  size = 'md',
  type = 'spinner',
  zIndex,
  ...nativeProps
}) => {
  const typeDef = loadPercent ? 'progress' : type;
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
      size={getSizeByType(typeDef, size)}
      type={typeDef}
      zIndex={zIndex}
    />
  );
};
