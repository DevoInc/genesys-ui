import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider, type DividerProps } from '../../../Divider';

export const CollapseSeparator: React.FC<DividerProps> = ({
  customColor,
  margin,
  ...restProps
}) => {
  const theme = useTheme();
  return (
    <Divider
      {...restProps}
      margin={margin || '0'}
      customColor={customColor || theme.cmp.collapse.color.border.base}
    />
  );
};
