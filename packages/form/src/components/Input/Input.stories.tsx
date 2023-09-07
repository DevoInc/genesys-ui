import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import {
  getValidation,
  ValidationMsg,
  validationMsgs,
} from './__stories__/validation';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    // Default
    hasWideControl: true,
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    type: 'text',
    // Meant for the story
    id: 'input-id',
    label: 'Label for story',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    // because the storybook doesn't recognize the WithRequired utility
    id: {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Base: Story = {};

export const SimpleValidation: Story = {
  render: () =>
    (() => {
      const [validation, setValidation] = React.useState<ValidationMsg>(
        validationMsgs.idle,
      );

      const handleChange = React.useCallback((text) => {
        return setValidation(getValidation(text));
      }, []);

      return (
        <Input
          label="Email"
          id="validation"
          onChange={(e) => handleChange((e.target as HTMLInputElement).value)}
          helper={validation.helper}
          status={validation.status}
        />
      );
    })(),
  parameters: {
    controls: false,
  },
};
