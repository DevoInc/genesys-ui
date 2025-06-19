import * as React from 'react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { TZDate } from '@date-fns/tz';

import { Time } from '@devoinc/genesys-ui-datetime';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('Time', () => {
    test('render', async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Time
          value={new Date(2024, 7, 9, 10, 30, 15, 300)}
          onChange={onChange}
        />,
      );
      const input = screen.getByLabelText('Time') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input).toHaveDisplayValue('10:30:15');

      await user.click(input);
      await user.type(input, '10');

      expect(onChange).toBeCalledTimes(2);
    });

    test('timezone UTC-06:00', async () => {
      const onChange = vi.fn();
      const tz = 'UTC-06:00';
      render(
        <Time
          value={new TZDate(2024, 7, 9, 10, 30, 15, 300, tz)}
          onChange={onChange}
          tz={tz}
        />,
      );
      const input = screen.getByLabelText('Time') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input).toHaveDisplayValue('10:30:15');
    });

    afterEach(() => {
      cleanup();
    });
  });
});
