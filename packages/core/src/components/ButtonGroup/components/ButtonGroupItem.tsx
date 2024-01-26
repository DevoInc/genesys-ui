import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, FlexItemProps } from '../../Flex';

import { buttonGroupItemMixin, ButtonGroupItemMixinProps } from '../helpers';
import { ButtonGroupContext } from '../context';

export interface ButtonGroupItemProps
  extends Omit<FlexItemProps, 'children'>,
    Omit<ButtonGroupItemMixinProps, 'theme'> {
  children: React.ReactElement<any>;
}

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
  as = 'li',
  children,
  hasQuietButton,
  size = 'md',
  ...restFlexItemProps
}) => {
  const theme = useTheme();
  const context = React.useContext(ButtonGroupContext);
  return (
    <Flex.Item
      {...restFlexItemProps}
      as={as}
      styles={buttonGroupItemMixin({
        hasQuietButton: hasQuietButton || context.hasQuietButton,
        size: size || context.size,
        theme,
      })}
    >
      {children}
    </Flex.Item>
  );
};
