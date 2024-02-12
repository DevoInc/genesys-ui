import { subDays, subMinutes } from 'date-fns';

export const onApply =
  (setDate) =>
    ({ timestamp, preset }) => {
      // eslint-disable-next-line no-console
      console.table({
        ...(preset?.from &&
        preset?.to && {
          preset: {
            from: preset.from,
            to: preset.to,
          },
        }),
        timestamp: {
          from: timestamp.from,
          to: timestamp.to,
        },
        // eslint-disable-next-line camelcase
        timestamp_formatted: {
          from: new Date(timestamp.from),
          to: new Date(timestamp.to),
        },
      });
      setDate({
        from: preset?.from || timestamp.from,
        to: preset?.to || timestamp.to,
      });
    };

export const onChange = (setDate) => (range) => {
  // eslint-disable-next-line no-console
  console.log('click onChange');
  setDate(range);
};

export const expresionToTimeCallback = () => {
  return new Date().getTime();
};

export const expressionValuesMap = {
  'now()': () => new Date().getTime(),
  'now() - 5m': () => subMinutes(new Date(), 5).getTime(),
  'now() - 1d': () => subDays(new Date(), 1).getTime(),
  'now() - 15d': () => subDays(new Date(), 15).getTime(),
};

// export const expresionToTimeCallback = (preset) => {
//   const value = expressionValuesMap[preset]();
//   return value;
// };
