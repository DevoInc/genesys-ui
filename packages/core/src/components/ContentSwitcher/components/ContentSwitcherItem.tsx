import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { CONTENT_SWITCHER_ITEM_SIZE_MAP } from '../constants';

import { Button, type ButtonProps } from '../../Button';
import type { TBaseSize } from '../../../declarations/commonProps';

import {
  contentSwitcherItemMixin,
  type ContentSwitcherItemMixinProps,
} from './contentSwitcherItemMixin';
import { ContentSwitcherContext } from '../context';

export interface ContentSwitcherItemProps
  extends Omit<
      ButtonProps,
      | 'aria-selected'
      | 'as'
      | 'colorScheme'
      | 'role'
      | 'selectionScheme'
      | 'size'
      | 'state'
    >,
    Pick<ContentSwitcherItemMixinProps, 'state'> {
  /** Size options for icon, text, padding... etc. */
  size?: TBaseSize;
}

export const ContentSwitcherItem: React.FC<ContentSwitcherItemProps> = ({
  children,
  icon,
  id,
  onChange,
  onClick,
  size = 'md',
  state = 'enabled',
  styles,
  tooltip,
  wide,
  ...restButtonProps
}) => {
  const theme = useTheme();
  const selected = state === 'selected';
  const context = React.useContext(ContentSwitcherContext);
  return (
    <Button
      {...restButtonProps}
      aria-selected={selected}
      as="label"
      colorScheme="quiet"
      icon={icon}
      id={id}
      onChange={onChange}
      onClick={onClick}
      role="tab"
      selectionScheme="single"
      size={CONTENT_SWITCHER_ITEM_SIZE_MAP[context.size || size]}
      state={selected ? 'selected' : state}
      styles={concat(contentSwitcherItemMixin({ state, theme, wide }), styles)}
      tooltip={tooltip}
      wide={context.wide || wide}
    >
      {children}
    </Button>
  );
};
