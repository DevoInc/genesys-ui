import * as React from 'react';

import { Loader, LoaderProps } from '../../Loader';
import { ContextualScrollLoaderSize } from '../../declarations';
import { getSizeByType } from '../../utils';
import { CmpSpacing } from '../../../../declarations';

export interface ContextualScrollLoaderProps
  extends Omit<LoaderProps, 'gradientConfig' | 'type'> {
  gradientHeight?: string;
  spinnerOffset?: CmpSpacing;
  size: ContextualScrollLoaderSize;
}

export const ContextualScrollLoader: React.FC<ContextualScrollLoaderProps> = ({
  className,
  fixed,
  gradientHeight,
  progressIcon,
  loadPercent,
  spinnerOffset = 'cmp-xs',
  size = 'md',
  styles,
  subcomponentStyles,
  zIndex,
  ...nativeProps
}) => {
  return (
    <Loader
      {...nativeProps}
      {...(styles ? { styles } : { subcomponentStyles })}
      className={className}
      fixed={fixed}
      gradientConfig={{
        height: gradientHeight,
      }}
      progressIcon={progressIcon}
      justifyContent="flex-end"
      loadPercent={loadPercent}
      padding={`0 0 ${spinnerOffset} 0`}
      size={getSizeByType('spinner', size)}
      type="spinner"
      zIndex={zIndex}
    />
  );
};
