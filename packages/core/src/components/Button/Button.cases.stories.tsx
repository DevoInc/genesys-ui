import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../..';

const meta: Meta<typeof Button> = {
  title: 'Components/Core/Button/Button/Cases',
  component: Button,
  args: {
    children: 'Button label',
    iconPosition: 'left',
    colorScheme: 'neutral',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AsDropdown: Story = {
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Button
          hasDropdown
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
        >
          Dropdown button
        </Button>
      );
    })(),
};

export const AsLink: Story = {
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Go to Devo ',
  },
};
