import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButtonCollapse } from './IconButtonCollapse';

const meta: Meta<typeof IconButtonCollapse> = {
  title: 'Components/Button/IconButtonCollapse',
  component: IconButtonCollapse,
  args: {
    colorScheme: 'blend-base',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonCollapse>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButtonCollapse
          {...props}
          onClick={() => {
            setExpanded(!expanded);
          }}
          state={expanded ? 'expanded' : props.state}
        />
      );
    })(args),
};
