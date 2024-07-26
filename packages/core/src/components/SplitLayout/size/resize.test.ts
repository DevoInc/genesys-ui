import { describe, test, expect } from 'vitest';

import { pointsToSizes, resize, sizesToPoints } from './resize';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('resize', () => {
        describe('sizesToPoints', () => {
          const cases: [string, number[], number[]][] = [
            ['[10, 10]', [10, 10], [10, 20]],
            ['[10, 10, 10]', [10, 10, 10], [10, 20, 30]],
          ];
          test.each(cases)('%s', (_title, sizes, expected) => {
            expect(sizesToPoints(sizes)).toStrictEqual(expected);
          });
        });

        describe('pointsToSizes', () => {
          const cases: [string, number[], number[]][] = [
            ['[10, 20]', [10, 20], [10, 10]],
            ['[10, 20, 30]', [10, 20, 30], [10, 10, 10]],
          ];
          test.each(cases)('%s', (_title, points, expected) => {
            expect(pointsToSizes(points)).toStrictEqual(expected);
          });
        });

        describe('resize', () => {
          const cases: [
            string,
            number[],
            number,
            number,
            number[],
            number[],
            number[],
          ][] = [
            ['[100, 100], 0, -50', [100, 100], 0, -50, [], [], [50, 150]],
            [
              '[100, 100, 100], 0, -50',
              [100, 100, 100],
              0,
              -50,
              [],
              [],
              [50, 150, 100],
            ],
            [
              '[100, 100, 100], 0, -50',
              [100, 100, 100],
              0,
              -50,
              [],
              [],
              [50, 150, 100],
            ],
            [
              '[100, 100, 100], 0, -50, [75]',
              [100, 100, 100],
              0,
              -50,
              [75],
              [],
              [75, 125, 100],
            ],
            [
              '[100, 100, 100], 1, +50, [0,0,75]',
              [100, 100, 100],
              1,
              50,
              [0, 0, 75],
              [],
              [100, 125, 75],
            ],
          ];
          test.each(cases)(
            '%s',
            (_title, sizes, index, delta, min, max, expected) => {
              expect(resize(sizes, index, delta, min, max)).toStrictEqual(
                expected,
              );
            },
          );
        });
      });
    });
  });
});
