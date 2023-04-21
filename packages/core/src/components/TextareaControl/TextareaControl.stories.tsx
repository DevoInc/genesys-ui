import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TextareaControl, VFlex } from '..';

const meta: Meta<typeof TextareaControl> = {
  title: 'Components/Core/Form/TextareaControl',
  component: TextareaControl,
  args: {
    size: 'md',
    status: 'base',
    rows: 4,
    resize: 'both',
  },
  argTypes: {
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': { type: { required: true } as never },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof TextareaControl>;

export const Base: Story = {
  render: (args) =>
    ((args) => (
      <VFlex maxWidth="72rem">
        <TextareaControl {...args} css={'border-color: red'} />
      </VFlex>
    ))(args),
  args: {
    value: 'Content of the textarea ...',
  },
};
