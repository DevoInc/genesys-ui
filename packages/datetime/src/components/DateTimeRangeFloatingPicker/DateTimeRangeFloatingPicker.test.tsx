import * as React from 'react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import { TZDate } from '@date-fns/tz';
import { userEvent } from '@testing-library/user-event';

import {
  DateTimeRangeFloatingPicker,
  getDefaultPresets,
} from '@devoinc/genesys-ui-datetime';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('DateTimeRangeFloatingPicker', () => {
    test('render without selection', async () => {
      const monthDate = new Date(2025, 2, 21);
      const user = userEvent.setup();
      render(
        <DateTimeRangeFloatingPicker
          id={'date-time-range-floating-picker'}
          value={[]}
          onChange={() => {}}
          monthDate={monthDate}
          presets={getDefaultPresets()}
        />,
      );
      await user.click(screen.getByLabelText('from'));
      expect(screen.getAllByText('Mo')).toHaveLength(2);
      expect(screen.getByText('Last 5 minutes')).toBeInTheDocument();
    });

    test('render with TZ and select a value', { timeout: 10000 }, async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      const tz = 'UTC-10:00';
      const monthDate = new TZDate(2025, 4, 1, tz);

      render(
        <DateTimeRangeFloatingPicker
          id={'date-time-range-floating-picker'}
          value={[]}
          monthDate={monthDate}
          tz={tz}
          onChange={onChange}
        />,
      );

      await user.click(screen.getByLabelText('from'));
      const days = screen.getAllByText('15');
      await user.click(days[0]);
      await user.click(days[1]);
      await user.click(
        (screen.getByText('Apply') as HTMLSpanElement).parentElement,
      );

      expect(onChange).toHaveBeenCalledWith([
        new TZDate(2025, 4, 15, tz).valueOf(),
        new TZDate(2025, 5, 15, 23, 59, 59, 999, tz).valueOf(),
      ]);
    });

    afterEach(() => {
      cleanup();
    });
  });
});
