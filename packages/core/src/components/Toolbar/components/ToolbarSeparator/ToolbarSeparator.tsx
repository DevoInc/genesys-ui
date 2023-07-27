import * as React from 'react';

import { Divider, DividerProps } from '../../../Divider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToolbarSeparatorProps extends DividerProps {}

export const ToolbarSeparator: React.FC<ToolbarSeparatorProps> = ({
  height = '2rem',
  width = '0.1rem',
  margin = 'cmp-xxs',
  ...restDividerProps
}) => (
  <Divider
    {...restDividerProps}
    height={height}
    margin={margin}
    width={width}
  />
);
