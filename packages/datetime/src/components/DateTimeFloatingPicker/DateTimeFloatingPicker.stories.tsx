import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { isWeekend } from 'date-fns';

import { DateTimeFloatingPicker } from './DateTimeFloatingPicker';
import { getDefaultParseDate } from '../../parsers';

const meta: Meta<typeof DateTimeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeFloatingPicker',
  component: DateTimeFloatingPicker,
  args: {
    value: new Date().getTime(),
    label: 'My calendar',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeFloatingPicker>;

export const Playground: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);

      return (
        <DateTimeFloatingPicker
          {...props}
          value={value}
          onChange={(ts) => {
            setValue(ts);
          }}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
    label: 'My calendar',
  },
};

export const WithoutButtons: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);

      return (
        <DateTimeFloatingPicker
          {...props}
          value={value}
          autoApply
          onChange={(ts) => {
            setValue(ts);
          }}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

export const CustomParser: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);

      return (
        <DateTimeFloatingPicker
          {...props}
          value={value}
          autoApply={true}
          parseDate={(str: string) => {
            const result = getDefaultParseDate()(str);
            if (result.isValid) {
              const check = !isWeekend(result.value);
              if (!check) {
                result.isValid = false;
                result.errors = ['Is weekend!!!'];
              }
            }
            return result;
          }}
          onChange={(ts) => {
            setValue(ts);
          }}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};
