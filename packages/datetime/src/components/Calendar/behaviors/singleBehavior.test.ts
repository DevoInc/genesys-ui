import { describe, test, expect } from 'vitest';

import { singleBehavior } from './singleBehavior';

const HOUR = 60 * 60 * 1000;
const now = new Date().getTime();

describe('forwardBehavior', () => {
  const cases: [string, (number | Date)[], number | Date, (number | Date)[]][] =
    [
      ['point before complete range', [now, now], now - HOUR, [now - HOUR]],
      ['point before range with single point', [now], now - HOUR, [now - HOUR]],
      [
        'point after range with single point',
        [now],
        now + HOUR,
        [now, now + HOUR],
      ],
      ['point after complete range', [now, now], now + HOUR, [now, now + HOUR]],
    ];

  test.each(cases)('%s', (_title, range, dt, expected) => {
    expect(singleBehavior(range, dt)).toEqual(expected);
  });
});
