import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButtonCollapse } from '..';

const meta: Meta<typeof IconButtonCollapse> = {
  title: 'Components/Button/IconButtonCollapse',
  component: IconButtonCollapse,
  args: {
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonCollapse>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButtonCollapse
          {...args}
          onClick={() => {
            setExpanded(!expanded);
          }}
          state={expanded ? 'expanded' : args.state}
        />
      );
    })(args),
};
