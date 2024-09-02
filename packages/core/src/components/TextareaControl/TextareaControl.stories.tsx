import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TextareaControl } from './TextareaControl';
import { VFlex } from '../VFlex';

const meta: Meta<typeof TextareaControl> = {
  title: 'Components/Form/TextareaControl',
  component: TextareaControl,
  args: {
    size: 'md',
    status: 'base',
    rows: 4,
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
    ((props) => (
      <VFlex maxWidth="72rem">
        <TextareaControl {...props} />
      </VFlex>
    ))(args),
  args: {
    value: 'Content of the textarea ...',
  },
};
