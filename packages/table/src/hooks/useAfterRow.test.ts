import { describe, test, expect } from 'vitest';

import { useAfterRow } from './useAfterRow';
import { TRowDef } from '../declarations';

const data = [
  {
    id: '1',
    name: 'Santi',
  },
  {
    id: '2',
    name: 'Javi',
  },
  {
    id: '3',
    name: 'Horacio',
  },
  {
    id: '4',
    name: 'Jose',
  },
];

describe('useAfterRow', () => {
  const cases: [string, unknown, TRowDef[], unknown][] = [
    [
      'basic',
      data,
      [],
      [
        [
          {
            id: '1',
            name: 'Santi',
          },
          {
            id: "1'",
            name: 'Santi',
          },
          {
            id: '2',
            name: 'Javi',
          },
          {
            id: "2'",
            name: 'Javi',
          },
          {
            id: '3',
            name: 'Horacio',
          },
          {
            id: "3'",
            name: 'Horacio',
          },
          {
            id: '4',
            name: 'Jose',
          },
          {
            id: "4'",
            name: 'Jose',
          },
        ],
        [
          {
            id: "1'",
            hide: true,
          },
          {
            id: "2'",
            hide: true,
          },
          {
            id: "3'",
            hide: true,
          },
          {
            id: "4'",
            hide: true,
          },
        ],
      ],
    ],
  ];

  test.each(cases)('%s', (_title, data, afterRow, expected) => {
    const { addAfterRow } = useAfterRow({ data, afterRow });
    expect(addAfterRow()).toEqual(expected);
  });
});
