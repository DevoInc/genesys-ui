import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { Flex, FlexProps } from '../../../Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToolbarGroupProps extends FlexProps {}

export const ToolbarGroup: React.FC<ToolbarGroupProps> = ({
  alignItems = 'center',
  alignSelf = 'stretch',
  children,
  flex = '1 1 auto',
  role = 'group',
  styles,
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
      styles={concat(
        `background: ${theme.alias.color.background.surface.base.base};`,
        styles
      )}
    >
      {children}
    </Flex>
  );
};
