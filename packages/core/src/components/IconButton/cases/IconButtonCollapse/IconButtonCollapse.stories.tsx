import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

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

export const Playground: Story = {
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
          tooltip={expanded ? 'Collapse this content' : 'Expand this content'}
        />
      );
    })(args),
};
