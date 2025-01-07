import { describe, test, expect } from 'vitest';

import { getFormatDateTimeStr } from './getFormatDateTimeStr';

describe('helpers', () => {
  describe('formatter', () => {
    describe('getFormatDateTimeStr', () => {
      const cases: [string, boolean, boolean, string][] = [
        ['with seconds and millis', true, true, 'yyyy-MM-dd HH:mm:ss.SSS'],
        [
          'without seconds and with millis',
          false,
          true,
          'yyyy-MM-dd HH:mm:ss.SSS',
        ],
        ['with seconds and not millis', true, false, 'yyyy-MM-dd HH:mm:ss'],
        ['without seconds and millis', false, false, 'yyyy-MM-dd HH:mm'],
      ];

      test.each(cases)('%s', (_title, hasSeconds, hasMillis, expected) => {
        expect(getFormatDateTimeStr(hasSeconds, hasMillis)).toEqual(expected);
      });
    });
  });
});
