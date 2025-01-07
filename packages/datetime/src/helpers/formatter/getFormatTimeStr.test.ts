import { describe, test, expect } from 'vitest';

import { getFormatTimeStr } from './getFormatTimeStr';

describe('helpers', () => {
  describe('formatter', () => {
    describe('getFormatTimeStr', () => {
      const cases: [string, boolean, boolean, string][] = [
        ['with seconds and millis', true, true, 'HH:mm:ss.SSS'],
        ['without seconds but with millis', false, true, 'HH:mm:ss.SSS'],
        ['with seconds and not millis', true, false, 'HH:mm:ss'],
        ['without seconds and millis', false, false, 'HH:mm'],
      ];

      test.each(cases)('%s', (_title, hasSeconds, hasMillis, expected) => {
        expect(getFormatTimeStr(hasSeconds, hasMillis)).toEqual(expected);
      });
    });
  });
});
