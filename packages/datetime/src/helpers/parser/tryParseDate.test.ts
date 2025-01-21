import { describe, test, expect } from 'vitest';

import { tryParseDate } from './tryParseDate';
import { getDefaultParseDate } from '../../parsers';

describe('helpers', () => {
  describe('parser', () => {
    describe('tryParseDate', () => {
      test('try parse date with parseStrDate default function', () => {
        const defaultParseDate = getDefaultParseDate();
        const tryParseDateFn = tryParseDate(defaultParseDate);
        expect(tryParseDateFn('')).toBeNull();
        expect(tryParseDateFn('2024-12-31 00:00:00')).toBe(
          defaultParseDate('2024-12-31 00:00:00').value,
        );
        expect(tryParseDateFn(100)).toBe(100);
      });
    });
  });
});
