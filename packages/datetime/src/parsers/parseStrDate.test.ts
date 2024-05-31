import { describe, test, expect } from 'vitest';

import { parseStrDate } from '../helpers/parseStrDateseStrDate';

describe('helpers', () => {
  describe('dateParser', () => {
    describe('parseDate', () => {
      test('should parse a valid date string correctly', () => {
        const result = parseStrDate('2024-04-26 12:00:00');
        expect(result).toEqual({
          isValid: true,
          value: new Date('2024-04-26 12:00:00').getTime(),
          errors: [],
        });
      });

      test('should return isValid as false for an invalid date string', () => {
        const result = parseStrDate('invalid date');
        expect(result).toEqual({
          isValid: false,
          value: null,
          errors: ['Invalid date'],
        });
      });

      test('should handle custom valid date formats', () => {
        const result = parseStrDate('2024/04/26 12:00:00', [
          'yyyy/MM/dd HH:mm:ss',
        ]);
        expect(result).toEqual({
          isValid: true,
          value: new Date('2024/04/26 12:00:00').getTime(),
          errors: [],
        });
      });

      test('should return isValid as false for an empty date string', () => {
        const result = parseStrDate('');
        expect(result).toEqual({
          isValid: false,
          value: null,
          errors: ['Invalid date'],
        });
      });
    });
  });
});
