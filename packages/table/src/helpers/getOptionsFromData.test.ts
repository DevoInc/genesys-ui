import { describe, test, expect } from 'vitest';
import { SelectOption } from '@devoinc/genesys-ui';

import type { Data } from '../declarations';
import { getOptionsFromData } from './getOptionsFromData';

describe('getOptionsFromData', () => {
  const cases: [string, Data, string, SelectOption[]][] = [
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
