import * as React from 'react';
import {
  MenuListProps as RWSMenuListProps,
  WindowedMenuList,
} from 'react-windowed-select';
import { components } from 'react-select';

import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuListProps<Option> extends RWSMenuListProps<Option> {}

export const MenuList = <Option extends SelectOption>(
  props: MenuListProps<Option>
): React.ReactElement<MenuListProps<Option>> => {
  return props.selectProps.virtualizeOptions ? (
    <WindowedMenuList {...props} />
  ) : (
    <components.MenuList {...props} />
  );
};
