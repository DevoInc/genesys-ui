import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Divider, HFlex } from '../';

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {};

export const CustomColor: Story = {
  tags: ['isHidden'],
  args: {
    customColor: 'red',
  },
};

export const Types: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex>
        <Divider {...props} vertical />
        <Divider {...props} width="200px" />
      </HFlex>
    ))(args),
};
