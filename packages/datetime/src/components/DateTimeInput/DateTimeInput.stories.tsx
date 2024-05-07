import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeInput } from './DateTimeInput';
import { useDateTimeInputValidation } from './useDateTimeInputValidation';
import { formatDate, parseDate } from '../../helpers';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Components/Datetime/DateTimeInput',
  component: DateTimeInput,
};

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(new Date().getTime());
      const { inputValue, inputOnChange, errors } = useDateTimeInputValidation({
        value,
        onChange: setValue,
        reprDate: (ts: number) => formatDate(ts),
        parseDate,
      });

      return (
        <div style={{ width: '400px' }}>
          <DateTimeInput
            {...props}
            value={inputValue}
            onChange={inputOnChange}
            helper={errors.length > 0 ? errors[0] : "I'm the helper"}
            status={errors.length > 0 ? 'error' : 'base'}
          />
        </div>
      );
    })(args),
  args: {
    label: "I'm the label",
  },
};
