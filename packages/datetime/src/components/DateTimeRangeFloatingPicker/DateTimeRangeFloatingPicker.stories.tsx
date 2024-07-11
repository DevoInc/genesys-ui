import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subMonths } from 'date-fns';

import { DateTimeRangeFloatingPicker } from './DateTimeRangeFloatingPicker';
import { onApply } from './__stories__/utils';
import { defaultPresets } from '../Presets';
import { TRealtimeState } from '../DateTimeRangeInput/declarations';
import { useMonthSelectorRange } from '../MonthSelector';

const meta: Meta<typeof DateTimeRangeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeRangeFloatingPicker',
  component: DateTimeRangeFloatingPicker,
  args: {
    value: [subMonths(new Date(), 1).getTime(), new Date().getTime()],
    id: 'story-demo',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangeFloatingPicker>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);

      // TODO: Review and move the onApply to a hook
      return (
        <DateTimeRangeFloatingPicker
          {...props}
          // onApply={onApply(setValue)}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            // eslint-disable-next-line no-console
            console.log('Has changed', newValue);
          }}
        />
      );
    })(args),
};

export const DefaultPresets: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={(range) => {
            // eslint-disable-next-line no-console
            console.log('something has changed', range);
          }}
          onRealTimeClick={(event) => {
            // eslint-disable-next-line no-console
            console.log('RT button clicked', event);
          }}
          presets={defaultPresets}
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
      const [realtime, setRealtime] =
        React.useState<TRealtimeState>('disabled');
      const [btnDisabledApply, setBtnDisabledApply] = React.useState(
        props.disableApplyButton,
      );

      const realtimeCallback = React.useCallback(() => {
        if (realtime === 'inactive') {
          setRealtime('activated');
          setDate({ from: '', to: '' });
        } else if (realtime === 'activated') {
          setRealtime('inactive');
          setDate(props.value);
        }
      }, [props.value, realtime]);

      const onChangeCallback = React.useCallback(
        (range: {
          timestamp: { from: number; to: number };
          preset: { from: string; to: string };
        }) => {
          // control Apply button
          if (
            (range.timestamp.from && !range.timestamp.to) ||
            (range.timestamp.to && !range.timestamp.from) ||
            (range.preset.from && !range.preset.to) ||
            (range.preset.to && !range.preset.from)
          ) {
            setBtnDisabledApply(true);
          } else {
            setBtnDisabledApply(false);
          }

          // control realtime button
          if (range.timestamp.from || range.timestamp.to) {
            setRealtime('disabled');
          } else {
            setRealtime('inactive');
          }
        },
        [],
      );

      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={onChangeCallback}
          onRealTimeClick={realtimeCallback}
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
          realTime={realtime}
          disableApplyButton={btnDisabledApply}
        />
      );
    })(args),
  args: {
    realTime: 'inactive',
    showCalendarIcon: true,
  },
};
