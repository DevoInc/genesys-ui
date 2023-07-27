import * as React from 'react';
import { useTheme } from 'styled-components';

import { FLEX_SPACING_SIZE_MAP } from './constants';

import { ButtonGroupSize } from './declarations';

import { ButtonProps, Flex, FlexProps, IconButtonProps } from '../';

import {
  buttonGroupItemMixin,
  buttonGroupMixin,
  ButtonGroupMixinProps,
} from './helpers';

export interface ButtonGroupProps
  extends Omit<FlexProps, 'as' | 'children'>,
    Omit<ButtonGroupMixinProps, 'theme'> {
  //TODO: add the DropdownMenu to this types when it's ready
  children: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonProps>
  )[];
  /** The size of the buttons */
  size?: ButtonGroupSize;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  alignItems = 'center',
  children,
  flexWrap = 'wrap',
  gap,
  hidden,
  inline = true,
  justifyContent = 'center',
  size = 'md',
  visibilityTrigger,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      as="ul"
      flexWrap={flexWrap}
      gap={gap || `cmp-${FLEX_SPACING_SIZE_MAP[size]}`}
      justifyContent={justifyContent}
      inline={inline}
      styles={buttonGroupMixin({ hidden, theme, visibilityTrigger })}
    >
      {children?.map((child, idx) => (
        <Flex.Item
          as="li"
          key={idx}
          styles={buttonGroupItemMixin({
            quietChildButton: child.props?.colorScheme === 'quiet',
            size,
            theme,
          })}
        >
          {React.cloneElement(child, {
            key: idx,
            size: child.props?.size || size,
          })}
        </Flex.Item>
      ))}
    </Flex>
  );
};
