import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, type FlexProps } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface ToolbarGroupProps extends FlexProps {}

export const ToolbarGroup: React.FC<ToolbarGroupProps> = ({
  alignItems = 'center',
  alignSelf = 'stretch',
  children,
  flex = '1 1 auto',
  role = 'group',
  style,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      alignSelf={alignSelf}
      flex={flex}
      role={role}
      style={mergeStyles(
        {
          background: theme.cmp.toolbar.group.color.background.base,
        },
        style,
      )}
    >
      {children}
    </Flex>
  );
};
