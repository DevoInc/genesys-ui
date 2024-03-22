import * as React from 'react';

import { Divider, type DividerProps } from '../../../Divider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToolbarDividerProps extends Omit<DividerProps, 'vertical'> {}

export const ToolbarDivider: React.FC<ToolbarDividerProps> = ({
  height = '2rem',
  width = '0.1rem',
  margin = '0 cmp-md',
  ...restDividerProps
}) => (
  <Divider
    {...restDividerProps}
    vertical
    height={height}
    margin={margin}
    width={width}
  />
);
