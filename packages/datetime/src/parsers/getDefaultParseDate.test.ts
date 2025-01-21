import { describe, test, expect } from 'vitest';

import { getDefaultParseDate } from './getDefaultParseDate';

describe('helpers', () => {
  describe('dateParser', () => {
    describe('parseDate', () => {
      test('should parse a valid date string correctly', () => {
        const defaultParseDate = getDefaultParseDate();
        const result = defaultParseDate('2024-04-26 12:00:00');
        expect(result).toEqual({
          isValid: true,
          value: new Date('2024-04-26 12:00:00').getTime(),
          errors: [],
        });
      });

      test('should return isValid as false for an invalid date string', () => {
        const defaultParseDate = getDefaultParseDate();
        const result = defaultParseDate('invalid date');
        expect(result).toEqual({
          isValid: false,
          value: null,
          errors: ['Invalid date'],
        });
      });

      test('should handle custom valid date formats', () => {
        const defaultParseDate = getDefaultParseDate({
          validFormats: [
            'yyyy/MM/dd HH:ss:mm', // inverted minutes and seconds
          ],
        });
        const result = defaultParseDate('2024/04/26 12:13:14');
        expect(result).toEqual({
          isValid: true,
          value: new Date('2024/04/26 12:14:13').getTime(),
          errors: [],
        });
      });

      test('should return isValid as false for an empty date string', () => {
        const result = getDefaultParseDate()('');
        expect(result).toEqual({
          isValid: false,
          value: null,
          errors: ['Invalid date'],
        });
      });
    });
  });
});
