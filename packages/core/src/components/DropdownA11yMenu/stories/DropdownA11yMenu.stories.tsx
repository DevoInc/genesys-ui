import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, DropdownA11yMenu } from '../../../index';
import { data } from './data';
import { TYPES } from '../constants';

const meta: Meta<typeof DropdownA11yMenu> = {
  title: 'Components/Core/Navigation/DropdownA11yMenu',
  component: DropdownA11yMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownA11yMenu>;

export const Base: Story = {
  args: {
    items: data,
  },
  render: (args) =>
    ((args) => {
      const items = args.items;
      const initState = {};
      items.forEach((item) => {
        if (item.type === TYPES.itemSelectable) {
          initState[item.label] = { checked: item.checked };
        }
      });

      const [menuState, setMenuState] = React.useState(initState);
      const mappedItems = items.map((item) => {
        if (item.type === TYPES.itemSelectable) {
          item.checked = menuState[item.label].checked;
          item.onChange = () => {
            setMenuState({
              ...menuState,
              [item.label]: {
                checked: !menuState[item.label]?.checked,
              },
            });
          };
        }
        return item;
      });
      return (
        <DropdownA11yMenu
          items={mappedItems}
          label="Show options"
          triggerComponent={Button}
        />
      );
    })(args),
};
