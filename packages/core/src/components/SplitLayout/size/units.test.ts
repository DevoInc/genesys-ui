import { describe, test, expect } from 'vitest';

import { isPixels, getPixels, isPercentage, getPercentage } from './units';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('units', () => {
        describe('isPixels', () => {
          const cases: [string, string | number, boolean][] = [
            ['100px', '100px', true],
            ['100p', '100p', false],
            ['100  px', '100  px', true],
            ['hi', 'hi', false],
            ['number 100', 100, true],
          ];
          test.each(cases)('%s', (_title, size, expected) => {
            expect(isPixels(size)).toStrictEqual(expected);
          });
        });

        describe('getPixels', () => {
          const cases: [string, string, number][] = [
            ['100px', '100px', 100],
            ['100  px', '100  px', 100],
          ];
          test.each(cases)('%s', (_title, size, expected) => {
            expect(getPixels(size)).toStrictEqual(expected);
          });
        });

        describe('isPercentage', () => {
          const cases: [string, string | number, boolean][] = [
            ['100%', '100%', true],
            ['100', '100', false],
            ['number 100', 100, false],
          ];
          test.each(cases)('%s', (_title, size, expected) => {
            expect(isPercentage(size)).toStrictEqual(expected);
          });
        });

        describe('getPercentage', () => {
          const cases: [string, string, number][] = [
            ['100%', '100%', 100],
            ['50%', '50%', 50],
          ];
          test.each(cases)('%s', (_title, size, expected) => {
            expect(getPercentage(size)).toStrictEqual(expected);
          });
        });
      });
    });
  });
});
