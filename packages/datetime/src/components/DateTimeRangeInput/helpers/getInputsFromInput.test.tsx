import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { getInputsFromInput } from './getInputsFromInput';
import { DateTimeRangeInput } from '../DateTimeRangeInput';

describe('components', () => {
  describe('DateTimeRangeInput', () => {
    describe('helpers', () => {
      describe('getInputsFromInput', () => {
        test('check that the path to inputs is right', async () => {
          render(<DateTimeRangeInput id="test" value={['', '']} />);
          const input = screen.getByLabelText('from') as HTMLInputElement;
          expect(getInputsFromInput(input)).toHaveLength(2);
        });
      });
    });
  });
});
