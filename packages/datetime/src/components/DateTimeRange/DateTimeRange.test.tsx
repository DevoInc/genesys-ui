import * as React from 'react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import { set } from 'date-fns';
import { TZDate, tz as tzFn } from '@date-fns/tz';
import { userEvent } from '@testing-library/user-event';

import { DateTimeRange, getDefaultPresets } from '@devoinc/genesys-ui-datetime';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('DateTimeRange', () => {
    test('render with one selection', async () => {
      const monthDate = new Date(2025, 2, 21);
      render(
        <DateTimeRange
          id={'date-time-range'}
          value={[]}
          onChange={() => {}}
          monthDate={monthDate}
          mode="both"
          presets={getDefaultPresets()}
        />,
      );
      expect(screen.getAllByText('Mo')).toHaveLength(2);
      expect(screen.getByText('Last 5 minutes')).toBeInTheDocument();
    });

    test('render with TZ and select a value', async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      const tz = 'UTC-10:00';
      const monthDate = new TZDate(2025, 4, 1, tz);

      render(
        <DateTimeRange
          id={'date-time-range'}
          value={[]}
          monthDate={monthDate}
          tz={tz}
          onChange={onChange}
        />,
      );

      const days = screen.getAllByText('15');
      await user.click(days[0]);
      await user.click(days[1]);

      expect(onChange).toHaveBeenNthCalledWith(
        1,
        [new TZDate(2025, 4, 15, tz).valueOf()],
        'cal-left',
      );
      expect(onChange).toHaveBeenNthCalledWith(
        2,
        [new TZDate(2025, 5, 15, tz).valueOf()],
        'cal-right',
      );
    });

    afterEach(() => {
      cleanup();
    });
  });
});
