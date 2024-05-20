import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { isWeekend } from 'date-fns';

import { DateTimeFloatingPicker } from './DateTimeFloatingPicker';
import { parseDate as parseDateHelper } from '../../helpers';

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

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);

      return (
        <DateTimeFloatingPicker
          {...props}
          value={value}
          onChange={(ts) => {
            setValue(ts);
            console.log(`date changed ${ts}`);
          }}
          onApply={() => {
            console.log('onApply');
          }}
          onCancel={() => {
            console.log('onCancel');
          }}
          onClose={() => {
            console.log('onClose');
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
          autoApply={true}
          onChange={(ts) => {
            setValue(ts);
            console.log(`OnChange ${ts}`);
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
            const result = parseDateHelper(str);
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
            console.log(`OnChange ${ts}`);
          }}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};
