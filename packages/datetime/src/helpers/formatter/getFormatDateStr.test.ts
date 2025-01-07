import { describe, test, expect } from 'vitest';

import { getFormatDateStr } from './getFormatDateStr';

describe('helpers', () => {
  describe('formatter', () => {
    describe('getFormatDateStr', () => {
      test('format date', () => {
        expect(getFormatDateStr()).toBe('yyyy-MM-dd');
      });
    });
  });
});
