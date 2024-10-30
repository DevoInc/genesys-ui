import { describe, expect, test } from 'vitest';

import { getTokenKeyFromColorScheme } from './tokens';

describe('helpers', () => {
  describe('color', () => {
    describe('tokens', () => {
      const cases: [string, string, string][] = [
        ['test', 'test', 'test'],
        ['test-test', 'test-test', 'testTest'],
      ];

      test.each(cases)('%s', (_title, colorScheme, expected) => {
        expect(getTokenKeyFromColorScheme(colorScheme)).toBe(expected);
      });
    });
  });
});
