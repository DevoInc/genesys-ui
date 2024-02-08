import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../..';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button/Cases',
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
  render: (args) =>
    ((args) => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Button
          {...args}
          hasDropdown
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
        >
          Dropdown button
        </Button>
      );
    })(args),
};

export const AsLink: Story = {
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Go to Devo ',
  },
};

export const Custom: Story = {
  name: 'Custom based in internal components',
  render: (args) =>
    ((args) => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Button._Container
          {...args}
          hasDropdown
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          styles="height: 48px; background-color: gold;"
        >
          <Button._Label styles="font-style: italic;">
            Dropdown button
          </Button._Label>
          <Button._Addon hasSpace isDropdown position="right">
            <Button._DropdownIcon />
          </Button._Addon>
        </Button._Container>
      );
    })(args),
};
