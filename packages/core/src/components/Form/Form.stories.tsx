import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form, InputControl } from '../';
import { FormGroup, FormButtons } from './components';

const meta: Meta<typeof Form> = {
  title: 'Components/Core/Form/Form',
  component: Form,
  subcomponents: { FormGroup, FormButtons },
  args: {
    direction: 'column',
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Base: Story = {
  args: {
    children: (
      <>
        <InputControl aria-label="Input label" />
      </>
    ),
  },
};
