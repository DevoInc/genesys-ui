import * as React from 'react';
import { useTheme } from 'styled-components';

import { FLEX_SPACING_SIZE_MAP } from './constants';

import type { TButtonGroupSize } from './declarations';
import type { TButtonColorScheme } from '../Button';
import { ButtonGroupContext } from './context';
import { buttonGroupMixin, type ButtonGroupMixinProps } from './helpers';

import { Flex, type FlexProps } from '../Flex';
import {
  ButtonGroupButton,
  ButtonGroupIconButton,
  ButtonGroupItem,
} from './components';
import { mergeStyles } from '../../helpers';
import { ButtonGroupDivider } from './components/ButtonGroupDivider';
import { ButtonGroupIconButtonClose } from './components/ButtonGroupIconButtonClose';
import { ButtonGroupIconButtonCollapse } from './components/ButtonGroupIconButtonCollapse';
import { ButtonGroupIconButtonRemove } from './components/ButtonGroupIconButtonRemove';
import { ButtonGroupIconButtonGoToDocs } from './components/ButtonGroupIconButtonGoToDocs';
import { ButtonGroupIconButtonStatus } from './components/ButtonGroupIconButtonStatus';
import { ButtonGroupIconButtonStop } from './components/ButtonGroupIconButtonStop';

export interface ButtonGroupProps
  extends Omit<FlexProps, 'children'>,
    Omit<ButtonGroupMixinProps, 'theme'> {
  children: React.ReactElement | React.ReactElement[];
  /** The size for the children buttons */
  size?: TButtonGroupSize;
  /** The color scheme for the children buttons */
  colorScheme?: TButtonColorScheme;
}

export const InternalButtonGroup = React.forwardRef<
  HTMLElement,
  ButtonGroupProps
>(
  (
    {
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
      style,
      visibilityTrigger,
      ...restFlexProps
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Flex
        {...restFlexProps}
        ref={ref}
        alignItems={alignItems}
        as={as}
        flexWrap={flexWrap}
        gap={gap || `cmp-${FLEX_SPACING_SIZE_MAP[size]}`}
        justifyContent={justifyContent}
        inline={inline}
        style={mergeStyles(
          buttonGroupMixin({ hidden, theme, visibilityTrigger }),
          style,
        )}
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
              display="inline-flex"
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
  },
);

export const ButtonGroup = InternalButtonGroup as typeof InternalButtonGroup & {
  Button: typeof ButtonGroupButton;
  Divider: typeof ButtonGroupDivider;
  IconButton: typeof ButtonGroupIconButton;
  IconButtonClose: typeof ButtonGroupIconButtonClose;
  IconButtonCollapse: typeof ButtonGroupIconButtonCollapse;
  IconButtonGoToDocs: typeof ButtonGroupIconButtonGoToDocs;
  IconButtonRemove: typeof ButtonGroupIconButtonRemove;
  IconButtonStatus: typeof ButtonGroupIconButtonStatus;
  IconButtonStop: typeof ButtonGroupIconButtonStop;
  Item: typeof ButtonGroupItem;
};

ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.Divider = ButtonGroupDivider;
ButtonGroup.IconButton = ButtonGroupIconButton;
ButtonGroup.IconButtonClose = ButtonGroupIconButtonClose;
ButtonGroup.IconButtonCollapse = ButtonGroupIconButtonCollapse;
ButtonGroup.IconButtonGoToDocs = ButtonGroupIconButtonGoToDocs;
ButtonGroup.IconButtonRemove = ButtonGroupIconButtonRemove;
ButtonGroup.IconButtonStatus = ButtonGroupIconButtonStatus;
ButtonGroup.IconButtonStop = ButtonGroupIconButtonStop;
ButtonGroup.Item = ButtonGroupItem;

InternalButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.Divider.displayName = 'ButtonGroup.Divider';
ButtonGroup.Button.displayName = 'ButtonGroup.Button';
ButtonGroup.IconButton.displayName = 'ButtonGroup.IconButton';
ButtonGroup.IconButtonClose.displayName = 'ButtonGroup.IconButtonClose';
ButtonGroup.IconButtonCollapse.displayName = 'ButtonGroup.IconButtonCollapse';
ButtonGroup.IconButtonGoToDocs.displayName = 'ButtonGroup.IconButtonGoToDocs';
ButtonGroup.IconButtonRemove.displayName = 'ButtonGroup.IconButtonRemove';
ButtonGroup.IconButtonStatus.displayName = 'ButtonGroup.IconButtonStatus';
ButtonGroup.IconButtonStop.displayName = 'ButtonGroup.IconButtonStop';
ButtonGroup.Item.displayName = 'ButtonGroup.Item';
