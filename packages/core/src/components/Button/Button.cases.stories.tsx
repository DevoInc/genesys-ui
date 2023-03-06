import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, HFlex } from '../..';

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
  render: () => (
    <HFlex>
      <Button hasDropdown>Dropdown collapsed</Button>
      <Button hasDropdown state="expanded">
        Dropdown expanded
      </Button>
    </HFlex>
  ),
};

export const AsLink: Story = {
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Go to Devo ',
  },
};
