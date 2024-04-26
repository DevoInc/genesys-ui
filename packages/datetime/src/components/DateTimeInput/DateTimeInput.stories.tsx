import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateTimeInput } from './DateTimeInput';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Components/Datetime/DateTimeInput',
  component: DateTimeInput,
};

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      return (
        <div style={{ width: '400px' }}>
          <DateTimeInput
            {...props}
            value={date}
            onChange={(ts) => {
              setDate(ts);
            }}
          />
        </div>
      );
    })(args),
  args: {
    value: new Date().getTime(),
    label: "I'm the label",
    defaultHelper: "I'm the helper",
  },
};

export const CustomValidation: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);
      const validate = (ts: string) => {
        if (ts.startsWith('2024')) {
          return {
            isValid: false,
            errors: ['Out of range', 'Not in 2024'],
            value: new Date(ts).getTime(),
          };
        }
        return { isValid: true, errors: [], value: null };
      };

      return (
        <div style={{ width: '400px' }}>
          <DateTimeInput
            {...props}
            value={date}
            onChange={(ts) => {
              setDate(ts);
            }}
            parseDate={validate}
          />
        </div>
      );
    })(args),
  args: {
    label: null,
    defaultHelper: null,
    value: new Date().getTime(),
  },
};
