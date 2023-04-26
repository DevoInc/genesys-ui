import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Field } from '..';
import { StyledInputControl } from '../InputControl/styled/StyledInputControl';

const meta: Meta<typeof Field> = {
  title: 'Components/Core/Form/Field',
  component: Field,
  args: {
    labelPosition: 'top',
    size: 'md',
    status: 'base',
  },
  argTypes: {
    helper: {
      defaultValue:
        'The sky calls to us a very small stage in a vast cosmic arena not a sunrise but a galaxyrise',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Base: Story = {
  args: {
    id: 'story-id',
    label: 'Label for story',
    children: (
      <StyledInputControl
        id="story-id"
        readOnly
        style={{
          alignItems: 'center',
          flex: '1 1 auto',
          display: 'flex',
          border: 'none',
        }}
      />
    ),
  },
};
