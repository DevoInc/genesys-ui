import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup, IconButton, Button } from '../';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Core/Button/ButtonGroup',
  component: ButtonGroup,
  args: {
    hidden: false,
    itemsGap: 'md',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Base: Story = {
  render: (args) =>
    ((args) => (
      <ButtonGroup {...args}>
        <IconButton icon="custom_date" />
        <IconButton icon="reload_refresh_update" />
        <IconButton icon="pin_bookmark_solid" />
        <Button icon="heart_full">Add to favorites</Button>
      </ButtonGroup>
    ))(args),
};
