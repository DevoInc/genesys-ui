import * as React from 'react';
import { PresetGroup } from '../declarations';

export const useDefaultPresets = (): PresetGroup[] => {
  return React.useMemo(
    () => [
      {
        label: 'Relative to',
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
          {
            value: {
              from: 'now() - 5m',
              to: 'now()',
            },
            label: 'Last 5 minutes',
          },
          {
            value: {
              from: 'now() - 10m',
              to: 'now()',
            },
            label: 'Last 10 minutes',
          },
          {
            value: {
              from: 'now() - 15m',
              to: 'now()',
            },
            label: 'Last 15 minutes',
          },
          {
            value: {
              from: 'now() - 30m',
              to: 'now()',
            },
            label: 'Last 30 minutes',
          },
          {
            value: {
              from: 'now() - 45m',
              to: 'now()',
            },
            label: 'Last 45 minutes',
          },
          {
            value: {
              from: 'now() - 1h',
              to: 'now()',
            },
            label: 'Last hour',
          },
          {
            value: {
              from: 'now() - 3h',
              to: 'now()',
            },
            label: 'Last 3 hours',
          },
          {
            value: {
              from: 'now() - 6h',
              to: 'now()',
            },
            label: 'Last 6 hours',
          },
          {
            value: {
              from: 'now() - 12h',
              to: 'now()',
            },
            label: 'Last 12 hours',
          },
          {
            value: {
              from: 'now() - 1d',
              to: 'now()',
            },
            label: 'Last 1 day',
          },
          {
            value: {
              from: 'now() - 2d',
              to: 'now()',
            },
            label: 'Last 2 days',
          },
          {
            value: {
              from: 'now() - 7d',
              to: 'now()',
            },
            label: 'Last 7 days',
          },
          {
            value: {
              from: 'now() - 15d',
              to: 'now()',
            },
            label: 'Last 15 days',
          },
          {
            value: {
              from: 'now() - 30d',
              to: 'now()',
            },
            label: 'Last month',
          },
          {
            value: {
              from: 'now() - 60d',
              to: 'now()',
            },
            label: 'Last 2 months',
          },
          {
            value: {
              from: 'now() - 90d',
              to: 'now()',
            },
            label: 'Last 3 months',
          },
          {
            value: {
              from: 'now() - 180d',
              to: 'now()',
            },
            label: 'Last 6 months',
          },
          {
            value: {
              from: 'now() - 365d',
              to: 'now()',
            },
            label: 'Last year',
          },
        ],
      },
      {
        label: 'Snap to',
        options: [
          {
            value: {
              from: 'now() @ 1m',
              to: 'now()',
            },
            label: 'Minute',
          },
          {
            value: {
              from: 'now() @ 1h',
              to: 'now()',
            },
            label: 'Hour',
          },
          {
            value: {
              from: 'now() @ 1d',
              to: 'now()',
            },
            label: 'Day',
          },
          {
            value: {
              from: 'now() @ 1W',
              to: 'now()',
            },
            label: 'ISO week',
          },
          {
            value: {
              from: 'now() @ 1w',
              to: 'now()',
            },
            label: 'Week',
          },
          {
            value: {
              from: 'now() @ 1M',
              to: 'now()',
            },
            label: 'Month',
          },
          {
            value: {
              from: 'now() @ 1y',
              to: 'now()',
            },
            label: 'Year',
          },
        ],
      },
    ],
    [],
  );
};
