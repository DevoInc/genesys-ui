import * as React from 'react';
import { useTheme } from 'styled-components';

import { FLEX_SPACING_SIZE_MAP } from './constants';

import { ButtonGroupSize } from './declarations';

import { Flex, FlexProps } from '../Flex';

import { buttonGroupMixin, ButtonGroupMixinProps } from './helpers';

import {
  ButtonGroupButton,
  ButtonGroupIconButton,
  ButtonGroupItem,
} from './components';
import { ButtonGroupContext } from './context';
import { ButtonColorScheme } from '../Button';

export interface ButtonGroupProps
  extends Omit<FlexProps, 'children'>,
    Omit<ButtonGroupMixinProps, 'theme'> {
  children: React.ReactElement | React.ReactElement[];
  /** The size for the children buttons */
  size?: ButtonGroupSize;
  /** The color scheme for the children buttons */
  colorScheme?: ButtonColorScheme;
}

export const InternalButtonGroup: React.FC<ButtonGroupProps> = ({
  alignItems = 'center',
  as = 'ul',
  colorScheme,
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
      as={as}
      flexWrap={flexWrap}
      gap={gap || `cmp-${FLEX_SPACING_SIZE_MAP[size]}`}
      justifyContent={justifyContent}
      inline={inline}
      styles={buttonGroupMixin({ hidden, theme, visibilityTrigger })}
    >
      {React.Children.map(children, (child, idx) => {
        const baseChild = (
          <ButtonGroupContext.Provider
            value={{
              colorScheme,
              size,
              hasQuietButton:
                child.props?.children?.props?.colorScheme === 'quiet',
            }}
          >
            {child}
          </ButtonGroupContext.Provider>
        );
        return child.type === ButtonGroupItem ? (
          baseChild
        ) : (
          <ButtonGroup.Item
            key={idx}
            hasQuietButton={
              child.props?.colorScheme === 'quiet' || colorScheme === 'quiet'
            }
            size={size}
          >
            {baseChild}
          </ButtonGroup.Item>
        );
      })}
    </Flex>
  );
};

export const ButtonGroup = InternalButtonGroup as typeof InternalButtonGroup & {
  Button: typeof ButtonGroupButton;
  IconButton: typeof ButtonGroupIconButton;
  Item: typeof ButtonGroupItem;
};

ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.IconButton = ButtonGroupIconButton;
ButtonGroup.Item = ButtonGroupItem;

InternalButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.Button.displayName = 'ButtonGroup.Button';
ButtonGroup.IconButton.displayName = 'ButtonGroup.IconButton';
ButtonGroup.Item.displayName = 'ButtonGroup.Item';
