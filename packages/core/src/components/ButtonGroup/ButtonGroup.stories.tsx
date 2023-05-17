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
        <IconButton icon="gi-custom_date" />
        <IconButton icon="gi-reload_refresh_update" />
        <IconButton icon="gi-pin_bookmark_solid" />
        <Button icon="gi-heart_full">Add to favorites</Button>
      </ButtonGroup>
    ))(args),
};
