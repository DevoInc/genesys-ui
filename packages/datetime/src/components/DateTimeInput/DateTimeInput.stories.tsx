import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { DateTimeInput } from './DateTimeInput';
import { useDateTimeInputValidation } from './hooks';
import { formatDate } from '../../helpers';
import { getDefaultParseDate } from '../../parsers';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Components/Datetime/DateTimeInput',
  component: DateTimeInput,
};

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Playground: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<number | Date>(new Date());
      const { inputValue, inputOnChange, errors } = useDateTimeInputValidation({
        value,
        onChange: setValue,
        formatDate: (ts: number) => formatDate()(ts),
        parseDate: getDefaultParseDate(),
      });

      return (
        <DateTimeInput
          {...props}
          data-popo={'popo'}
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
