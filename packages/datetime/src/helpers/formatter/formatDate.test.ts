import { describe, test, expect } from 'vitest';

import { formatDate } from './formatDate';

describe('helpers', () => {
  describe('formatter', () => {
    describe('formatDate', () => {
      test('should format date with default options', () => {
        const result = formatDate()(new Date(2024, 3, 15, 10, 30, 0));
        expect(result).toBe('2024-04-15 10:30:00');
      });

      test('should format date with custom format', () => {
        const result = formatDate({ format: 'yyyy-MM-dd' })(
          new Date(2024, 3, 15, 10, 30, 15, 500),
        );
        expect(result).toBe('2024-04-15');
      });

      test('invalid date', () => {
        const result = formatDate({ format: 'yyyy-MM-dd' })(undefined);
        expect(result).toBe('Invalid time value');
      });
    });
  });
});
