import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TStatusMessageBordered } from '../../declarations';
import { statusMessageMixin } from '../../helpers';
import { VFlex, type VFlexProps } from '../../../VFlex';
import { mergeStyles } from '../../../../helpers';

export interface StatusMessageContainerProps
  extends Omit<VFlexProps, 'childrenFitFullWidth'> {
  bordered?: TStatusMessageBordered;
}

export const StatusMessageContainer: React.FC<StatusMessageContainerProps> = ({
  alignItems = 'center',
  bordered,
  children,
  justifyContent = 'center',
  padding = 'cmp-md',
  style,
  ...restVFlexProps
}) => {
  const theme = useTheme();
  return (
    <VFlex
      {...restVFlexProps}
      alignItems={alignItems}
      childrenFitFullWidth={false}
      justifyContent={justifyContent}
      padding={padding}
      style={mergeStyles(statusMessageMixin({ bordered, theme }), style)}
    >
      {children}
    </VFlex>
  );
};
