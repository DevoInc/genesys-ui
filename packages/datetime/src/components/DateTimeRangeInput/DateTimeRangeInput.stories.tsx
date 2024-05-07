import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeRangeInput } from './DateTimeRangeInput';
import { useDateTimeRangeInputValidation } from './useDateTimeRangeInputValidation';
import { formatDate, parseDate, validateRange } from '../../helpers';

const meta: Meta<typeof DateTimeRangeInput> = {
  title: 'Components/Datetime/DateTimeRangeInput',
  component: DateTimeRangeInput,
  args: {
    ariaLabel: ['from', 'to'],
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('input clicked');
    },
    onChange: () => {
      // eslint-disable-next-line no-console
      console.log('input changed');
    },
    onRealTimeClick: () => {
      // eslint-disable-next-line no-console
      console.log('RT button clicked');
    },
    id: 'story-demo',
    isOpen: false,
    realTime: 'hidden',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangeInput>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState([
        new Date().getTime() - 60 * 60 * 1000,
        new Date().getTime(),
      ]);

      const { inputValue, inputOnChange, errors } =
        useDateTimeRangeInputValidation({
          value,
          onChange: setValue,
          reprDate: (ts: number) => formatDate(ts),
          parseDate,
        });

      return (
        <DateTimeRangeInput
          {...props}
          value={inputValue}
          onChange={inputOnChange}
          statuses={errors.map((e) => (e.length > 0 ? 'error' : 'base'))}
          helpers={errors.map((e) => (e.length > 0 ? e[0] : null))}
        />
      );
    })(args),
  args: {
    label: '',
  },
};

export const RangeValidation: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState([
        new Date().getTime() - 3600000,
        new Date().getTime(),
      ]);

      const { inputValue, inputOnChange, errors } =
        useDateTimeRangeInputValidation({
          value,
          onChange: setValue,
          reprDate: (ts: number) => formatDate(ts),
          parseDate,
        });

      const isValidRange = validateRange(value);

      return (
        <DateTimeRangeInput
          {...props}
          value={inputValue}
          onChange={inputOnChange}
          statuses={errors.map((e) => (e.length > 0 ? 'error' : 'base'))}
          helpers={errors.map((e) => (e.length > 0 ? e[0] : null))}
          status={isValidRange ? 'base' : 'error'}
          helper={isValidRange ? null : 'Invalid range'}
        />
      );
    })(args),
  args: {
    label: 'My DateTimeRange',
  },
};

// export const UsingExpressions: Story = {
//   render: (args) =>
//     ((props) => {
//       const [from, setFrom] = React.useState(props.from);
//       const [to, setTo] = React.useState(props.to);
//
//       const onChangeCallback = React.useCallback(
//         (range: {
//           from: { value: number; str: string };
//           to: { value: number; str: string };
//         }) => {
//           console.log('cambiado', range);
//           if (range.from.str.includes('now') || range.to.str.includes('now')) {
//             setFrom(range.from.str);
//             setTo(range.to.str);
//           } else {
//             setFrom(range.from.value);
//             setTo(range.to.value);
//           }
//         },
//         [],
//       );
//
//       return (
//         <DateTimeRangeInput
//           {...props}
//           from={from}
//           to={to}
//           // onBlur={onBlurCallback}
//           onChange={onChangeCallback}
//         />
//       );
//     })(args),
//   args: {
//     from: '15m - now()',
//     to: 'now()',
//     parseExpression: (exp: string) => {
//       if (exp.includes('now')) {
//         return {
//           isValid: true,
//           value: new Date().getTime(),
//           errors: [],
//         };
//       } else {
//         return {
//           isValid: false,
//           value: null,
//           errors: ['Invalid expression'],
//         };
//       }
//     },
//   },
// };
