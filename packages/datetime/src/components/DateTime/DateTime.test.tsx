import * as React from 'react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import { set } from 'date-fns';
import { TZDate, tz as tzFn } from '@date-fns/tz';
import { userEvent } from '@testing-library/user-event';

import { DateTime } from '@devoinc/genesys-ui-datetime';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('DateTime', () => {
    test('render with one selection', async () => {
      const monthDate = new Date(2025, 2, 21);
      render(
        <DateTime
          value={set(monthDate, { date: 10 })}
          monthDate={monthDate}
          onChangeMonthDate={() => null}
        />,
      );
      const div = screen.getByText('10').parentNode as HTMLDivElement;
      expect(div).toHaveClass('selected');
    });

    test('render with TZ and select a value', async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      const tz = 'UTC-10:00';
      const monthDate = new TZDate(2025, 1, 20, tz);
      render(
        <DateTime
          value={set(monthDate, { date: 10 }, { in: tzFn(tz) })}
          monthDate={monthDate}
          onChangeMonthDate={() => null}
          tz={tz}
          onChange={onChange}
        />,
      );
      const div = screen.getByText('11').parentNode as HTMLDivElement;
      await user.click(div);
      expect(onChange).toBeCalledWith(new TZDate(2025, 1, 11, tz).valueOf());
    });

    afterEach(() => {
      cleanup();
    });
  });
});
