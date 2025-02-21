import { describe, test, expect } from 'vitest';

import { cssTimeToMs } from './time';

describe('time', () => {
  describe('cssTimeToMs', () => {
    const cases = [
      ['default', undefined, 0],
      ['simple ms', '400ms', 400],
      ['simple s', '2s', 2000],
      ['less than one s', '.5s', 500],
    ];

    test.each(cases)('%s', (_title, cssTime, expected) => {
      expect(cssTimeToMs(cssTime)).toEqual(expected);
    });
  });
});
