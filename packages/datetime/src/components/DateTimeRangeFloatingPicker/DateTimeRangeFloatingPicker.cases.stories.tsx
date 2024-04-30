import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subMonths } from 'date-fns';

import { DateTimeRangeFloatingPicker } from './DateTimeRangeFloatingPicker';
import { onApply } from './__stories__/utils';
import { useDefaultPresets } from '../Presets';

const meta: Meta<typeof DateTimeRangeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeRangeFloatingPicker/Cases',
  component: DateTimeRangeFloatingPicker,
  args: {
    value: {
      from: subMonths(new Date(), 1).getTime(),
      to: new Date().getTime(),
    },
    id: 'story-demo',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangeFloatingPicker>;

export const DefaultPresets: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      const presets = useDefaultPresets();

      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={(range) => {
            console.log('something has changed', range);
          }}
          onRealTimeClick={(event) => {
            console.log('RT button clicked', event);
          }}
          presets={presets}
          parseExpression={(exp) => {
            for (const word of ['now', 'today', 'yesterday']) {
              if (typeof exp === 'string' && exp.includes(word))
                return {
                  isValid: true,
                  value: new Date().getTime(),
                  errors: [],
                };
            }
            return {
              isValid: false,
              value: null,
              errors: ['expression no valid'],
            };
          }}
        />
      );
    })(args),
};

export const CustomPresets: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={(range) => {
            console.log('something has changed', range);
          }}
          onRealTimeClick={(event) => {
            console.log('RT button clicked', event);
          }}
          presets={[
            {
              label: 'Relative too',
              options: [
                {
                  value: {
                    from: 'now() - 30s',
                    to: 'now()',
                  },
                  label: 'Last 30 seconds',
                },
                {
                  value: {
                    from: 'now() - 1m',
                    to: 'now()',
                  },
                  label: 'Last minute',
                },
              ],
            },
          ]}
          parseExpression={(exp) => {
            for (const word of ['now', 'today', 'yesterday']) {
              if (typeof exp === 'string' && exp.includes(word))
                return {
                  isValid: true,
                  value: new Date().getTime(),
                  errors: [],
                };
            }
            return {
              isValid: false,
              value: null,
              errors: ['expression no valid'],
            };
          }}
        />
      );
    })(args),
  args: {
    realTime: 'inactive',
    showCalendarIcon: true,
  },
};
