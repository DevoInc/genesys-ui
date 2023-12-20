import { SelectOption } from '@devoinc/genesys-ui';

import type { ColDef, Data } from '../../declarations';
import { getOptionsFromData } from './getOptionsFromData';

describe('getOptionsFromData', () => {
  const cases: [string, Data, ColDef, SelectOption[]][] = [
    [
      'with cellRendererParams',
      [
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
      ],
      {
        id: 'tag',
        cellRendererParams: {
          options: {
            a: { label: 'A' },
            b: { label: 'B' },
          },
        },
      },
      [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
    ],
    [
      'without cellRendererParams',
      [
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
      ],
      {
        id: 'tag',
      },
      [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
    ],
    [
      'with cellRendererParams but missing options',
      [
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
        { tag: 'a' },
        { tag: 'b' },
        { tag: 'b' },
      ],
      {
        id: 'tag',
        cellRendererParams: {
          options: {
            a: { label: 'A' },
          },
        },
      },
      [
        { label: 'A', value: 'a' },
        { label: 'b', value: 'b' },
      ],
    ],
  ];

  it.each(cases)('%s', (_title, data, colDef, expected) => {
    expect(getOptionsFromData(data, colDef)).toEqual(expected);
  });
});
