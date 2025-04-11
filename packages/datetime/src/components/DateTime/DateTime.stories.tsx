import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TZDate, tz as tzFn } from '@date-fns/tz';
import { set, formatISO9075 } from 'date-fns';

import { DateTime } from './DateTime';
import { Typography, VFlex } from '@devoinc/genesys-ui';

const meta: Meta<typeof DateTime> = {
  title: 'Components/Datetime/DateTime',
  component: DateTime,
  args: {
    onChange: console.log,
  },
};

export default meta;
type Story = StoryObj<typeof DateTime>;

export const Playground: Story = {
  render: () =>
    (() => {
      const [value, setValue] = React.useState<number | Date>(new Date());
      const [monthDate, setMonthDate] = React.useState<Date | number>(
        new Date().getTime(),
      );

      return (
        <DateTime
          onChange={(ts) => {
            setValue(ts);
          }}
          monthDate={monthDate}
          onChangeMonthDate={(dt) => {
            setMonthDate(dt);
          }}
          value={value}
        />
      );
    })(),
};

const tz = 'UTC-10:00';
const monthDateTZ = new TZDate(2025, 1, 1, tz);
const valueTZ = set(monthDateTZ, { date: 10 }, { in: tzFn(tz) });
export const Timezone: Story = {
  // tags: ['isHidden'],
  args: {
    tz,
    monthDate: monthDateTZ.valueOf(),
    value: valueTZ.valueOf(),
  },
  render: ({
    value: originalValue,
    monthDate: originalMonthDate,
    ...props
  }) => {
    const [value, setValue] = React.useState(originalValue);
    const [monthDate, setMonthDate] = React.useState(originalMonthDate);
    return (
      <VFlex>
        <DateTime
          {...props}
          onChange={(ts) => {
            setValue(ts);
          }}
          monthDate={monthDate}
          onChangeMonthDate={(dt) => {
            setMonthDate(dt);
          }}
          value={value}
        />
        <Typography.CodeBlock>
          {formatISO9075(value, { in: tzFn(props.tz) })}
        </Typography.CodeBlock>
      </VFlex>
    );
  },
};
