import * as React from 'react';

import { Menu } from '../../Menu';
import { MenuItemProps } from '../../Menu/subcomponents';

interface ItemSelectableProps extends MenuItemProps {
  checked?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export const ItemSelectable = ({
  checked,
  onChange,
  //selectionScheme = 'multiple',
  state,
  ...restMenuItemProps
}: ItemSelectableProps) => {
  const actionEvent = React.useCallback(
    (event) => {
      onChange(event);
      event.stopPropagation();
    },
    [onChange]
  );

  return (
    <Menu.Item
      {...restMenuItemProps}
      onClick={actionEvent}
      state={checked ? 'selected' : state}
      //selectionScheme={selectionScheme}
    />
  );
};
