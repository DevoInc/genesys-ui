import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './Textarea';
import { HFlex } from '../HFlex';
import { Typography } from '../Typography';
import { Form } from '../Form';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  args: {
    // Default
    hasWideControl: true,
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    // Meant for the story
    id: 'textarea-id',
    label: 'Label for story',
    placeholder: 'Placeholder...',
    rows: 4,
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
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {};

export const DisabledAndReadonly: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Textarea {...props} disabled label="Disabled" />
        <Textarea {...props} readOnly label="Readonly" value="Readonly value" />
      </Form.Group>
    ))(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Textarea {...props} label="Base" />
        <Textarea {...props} label="Error" status="error" />
        <Textarea {...props} label="Success" status="success" />
        <Textarea {...props} label="Warning" status="warning" />
      </Form.Group>
    ))(args),
};

export const HelperAndValidation: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Textarea
          {...props}
          helper="This is the Textarea component helper."
          label="With helper"
        />
        <Textarea
          {...props}
          helper="This is the Textarea component validation message."
          label="With validation message"
          status="error"
        />
        <Textarea
          {...props}
          helper="This is the Textarea component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Textarea
          {...props}
          helper="This is the Textarea component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
        <Textarea
          {...props}
          hideLabel
          helper="This is the Textarea component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Textarea
          {...props}
          hideLabel
          helper="This is the Textarea component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
      </Form.Group>
    ))(args),
};

export const WithCharacterCounter: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const MAX_CHARACTERS = 10;
      const [counter, setCounter] = React.useState<number>(0);
      const errorMessage = `The max character length permitted is ${MAX_CHARACTERS}.`;
      const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCounter(event.target.value.length);
      };

      return (
        <Textarea
          {...props}
          onChange={onChange}
          helper={
            <HFlex
              justifyContent={'space-between'}
              width={'100%'}
              alignItems={'flex-start'}
            >
              <Typography.Paragraph
                colorScheme={counter > MAX_CHARACTERS ? 'error' : 'weak'}
              >
                {counter > MAX_CHARACTERS ? errorMessage : props.helper}
              </Typography.Paragraph>
              <Typography.Paragraph
                colorScheme={counter > MAX_CHARACTERS ? 'error' : 'weak'}
              >
                {`${counter}/${MAX_CHARACTERS}`}
              </Typography.Paragraph>
            </HFlex>
          }
          status={counter > MAX_CHARACTERS ? 'error' : 'base'}
        />
      );
    })(args),
};
