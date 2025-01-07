import { describe, test, expect } from 'vitest';

import { tryParseDate } from './tryParseDate';
import { parseStrDate } from '../../parsers';

describe('helpers', () => {
  describe('parser', () => {
    describe('tryParseDate', () => {
      test('try parse date with parseStrDate default function', () => {
        const tryParseDateFn = tryParseDate(parseStrDate);
        expect(tryParseDateFn('')).toBeNull();
        expect(tryParseDateFn('2024-12-31 00:00:00')).toBe(
          parseStrDate('2024-12-31 00:00:00').value,
        );
        expect(tryParseDateFn(100)).toBe(100);
      });
    });
  });
});
