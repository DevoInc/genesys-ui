import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeInput } from './DateTimeInput';
import { useDateTimeInputValidation } from './hooks';
import { formatDate } from '../../helpers';
import { parseStrDate } from '../../parsers';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Components/Datetime/DateTimeInput',
  component: DateTimeInput,
};

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<number | Date>(new Date());
      const { inputValue, inputOnChange, errors } = useDateTimeInputValidation({
        value,
        onChange: setValue,
        reprDate: (ts: number) => formatDate(ts),
        parseDate: parseStrDate,
      });

      return (
        <DateTimeInput
          {...props}
          value={inputValue}
          onChange={inputOnChange}
          helper={errors.length > 0 ? errors[0] : "I'm the helper"}
          status={errors.length > 0 ? 'error' : 'base'}
        />
      );
    })(args),
  args: {
    label: "I'm the label",
  },
};
