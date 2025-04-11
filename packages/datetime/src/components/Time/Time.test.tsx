import * as React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

import { Time } from '@devoinc/genesys-ui-datetime';

import { render, screen } from '@test';

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
  });
});
