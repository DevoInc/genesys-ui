import { describe, test, expect } from 'vitest';

import { defaultErrorsRepr } from './defaultErrorRepr';

describe('components', () => {
  describe('Calendar', () => {
    describe('errors', () => {
      const cases: [string, string[], string][] = [
        ['single error', ['a'], 'a'],
        ['two errors', ['a', 'b'], 'a, b'],
        ['three errors', ['a', 'b', 'c'], 'a, b, c'],
      ];

      test.each(cases)('%s', (_title, errors, expected) => {
        expect(defaultErrorsRepr(errors)).toBe(expected);
      });
    });
  });
});
