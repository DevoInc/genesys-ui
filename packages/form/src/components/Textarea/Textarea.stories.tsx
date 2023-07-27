import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { HFlex, Typography } from '@devoinc/genesys-ui';

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

export const Base: Story = {};

export const WithCharacterCounter: Story = {
  args: {
    label:
      'It is possible to add a character counter to keep track of the text length and inform of a possible limit',
  },
  render: (args) =>
    ((args) => {
      const MAX_CHARACTERS = 10;
      const [counter, setCounter] = React.useState<number>(0);
      const errorMessage = `The max character length permitted is ${MAX_CHARACTERS}.`;
      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCounter(event.target.value.length);
      };

      return (
        <Textarea
          {...args}
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
                {counter > MAX_CHARACTERS ? errorMessage : args.helper}
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
