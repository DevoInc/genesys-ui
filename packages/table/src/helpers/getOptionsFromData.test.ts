import { describe, test, expect } from 'vitest';
import { TSelectOption } from '@devoinc/genesys-ui';

import type { Data } from '../declarations';
import { getOptionsFromData } from './getOptionsFromData';

describe('getOptionsFromData', () => {
  const cases: [string, Data, string, TSelectOption[]][] = [
    [
      'basic',
      [
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
      ],
      'tag',
      [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, data, id, expected) => {
    expect(getOptionsFromData(data, id)).toEqual(expected);
  });
});
