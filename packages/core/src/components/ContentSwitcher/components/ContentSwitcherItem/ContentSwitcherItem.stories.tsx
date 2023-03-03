import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ContentSwitcherItem } from './ContentSwitcherItem';

const meta: Meta<typeof ContentSwitcherItem> = {
  title: 'Components/Core/Navigation/ContentSwitcher/Item',
  component: ContentSwitcherItem,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ContentSwitcherItem>;

export const ItemUncontrolled: Story = {
  args: {
    size: 'md',
    icon: 'heart_full',
    state: 'enabled',
    onChange: null,
    children: 'ContentSwitcher item',
  },
};

export const ItemControlled: Story = {
  args: { size: 'md', icon: 'heart_full', state: 'enabled' },
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);

      const onChangeCallback = React.useCallback(() => {
        setSelected(!selected);
      }, [selected]);

      return (
        <ContentSwitcherItem
          {...args}
          onClick={onChangeCallback}
          state={selected ? 'selected' : args.state}
        >
          ContentSwitcher controlled item
        </ContentSwitcherItem>
      );
    })(args),
};
