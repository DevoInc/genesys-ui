import * as React from 'react';

import { Divider, DividerProps } from '../../../Divider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToolbarSeparatorProps extends Omit<DividerProps, 'vertical'> {}

export const ToolbarSeparator: React.FC<ToolbarSeparatorProps> = ({
  height = '2rem',
  width = '0.1rem',
  margin = '0 cmp-xxs',
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
