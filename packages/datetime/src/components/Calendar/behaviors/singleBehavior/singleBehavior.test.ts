import { describe, test, expect } from 'vitest';

import { singleBehavior } from './singleBehavior';

const now = new Date().getTime();

describe('forwardBehavior', () => {
  const cases: [string, (number | Date)[], number | Date, (number | Date)[]][] =
    [
      ['range with one value', [now], now + 1, [now + 1]],
      ['range with two values', [now, now], now + 1, [now + 1]],
      ['empty selection', [], now, [now]],
    ];

  test.each(cases)('%s', (_title, range, dt, expected) => {
    expect(singleBehavior(range, dt)).toEqual(expected);
  });
});
