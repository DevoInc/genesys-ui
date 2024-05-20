import { describe, test, expect } from 'vitest';

import { validateRange } from './dateValidations';

describe('helpers', () => {
  describe('dateValidations', () => {
    describe('validateRange', () => {
      const cases: [string, (Date | number)[], boolean][] = [
        [
          'two point range',
          [
            new Date('2024-05-07 16:00:00').getTime(),
            new Date('2024-05-08 16:00:00').getTime(),
          ],
          true,
        ],
        [
          'three point range',
          [
            new Date('2024-05-07 16:00:00'),
            new Date('2024-05-08 16:00:00'),
            new Date('2024-05-09 16:00:00'),
          ],
          true,
        ],
        [
          'two point range inverted',
          [
            new Date('2024-05-08 16:00:00').getTime(),
            new Date('2024-05-07 16:00:00').getTime(),
          ],
          false,
        ],
        [
          'three point range equal',
          [
            new Date('2024-05-08 16:00:00'),
            new Date('2024-05-08 16:00:00'),
            new Date('2024-05-08 16:00:00'),
          ],
          false,
        ],
        [
          'three point range first two equal',
          [
            new Date('2024-05-08 16:00:00').getTime(),
            new Date('2024-05-08 16:00:00').getTime(),
            new Date('2024-05-09 16:00:00').getTime(),
          ],
          false,
        ],
      ];

      test.each(cases)('%s', (_title, range, expected) => {
        expect(validateRange(range)).toEqual(expected);
      });
    });
  });
});
