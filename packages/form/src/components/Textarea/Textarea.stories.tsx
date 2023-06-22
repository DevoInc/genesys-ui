import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Flex, HFlex, Typography } from '@devoinc/genesys-ui';

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
export const UsingACharacterCounter: Story = {
  render: (args) =>
    ((args) => {
      const MAX_CHARACTERS = 10;
      const [counter, setCounter] = React.useState<number>(MAX_CHARACTERS);
      const [value, setValue] = React.useState('');

      const getFixedValue = (newValue: string) =>
        newValue.length > MAX_CHARACTERS ? value : newValue;
      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(getFixedValue(event.target.value));
        setCounter(MAX_CHARACTERS - event.target.value.length);
      };

      return (
        <Textarea
          {...args}
          onChange={onChange}
          helper={
            <HFlex justifyContent={'space-between'} width={'100%'}>
              <Flex.Item alignSelf={'flex-start'}>
                <Typography.Paragraph
                  colorScheme={counter < 0 ? 'error' : 'weak'}
                >
                  {args.helper || `Max ${MAX_CHARACTERS} characters`}
                </Typography.Paragraph>
              </Flex.Item>
              <Flex.Item alignSelf={'flex-end'}>
                <Typography.Paragraph
                  colorScheme={counter < 0 ? 'error' : 'weak'}
                >
                  {counter < 0 ? 0 : counter}
                </Typography.Paragraph>
              </Flex.Item>
            </HFlex>
          }
          status={counter < 0 ? 'error' : 'base'}
          value={value}
        />
      );
    })(args),
};
