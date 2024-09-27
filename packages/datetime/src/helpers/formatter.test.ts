import { describe, test, expect } from 'vitest';

import {
  formatDate,
  getFormatDateTimeStr,
  getFormatDateStr,
  getFormatTimeStr,
} from './formatter';

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

    describe('getFormatDateStr', () => {
      test('format date', () => {
        expect(getFormatDateStr()).toBe('yyyy-MM-dd');
      });
    });

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

    describe('formatDate', () => {
      test('should format date with default options', () => {
        const result = formatDate(new Date(2024, 3, 15, 10, 30, 0));
        expect(result).toBe('2024-04-15 10:30:00');
      });

      test('should format date with custom format', () => {
        const result = formatDate(
          new Date(2024, 3, 15, 10, 30, 15, 500),
          'yyyy-MM-dd',
        );
        expect(result).toBe('2024-04-15');
      });
    });
  });
});
