import { describe, test, expect } from 'vitest';

import { findValueArray } from './findValueArray';

describe('findValueArray', () => {
  const cases: [string, any, any, any][] = [
    [
      'value is string and should return option',
      'a',
      [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
      { label: 'a', value: 'a' },
    ],
    [
      'value is element and should return option equal to element',
      { label: 'a', value: 'a' },
      [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
      { label: 'a', value: 'a' },
    ],
    [
      'Option has group with single option and should return group completed',
      { label: 'a', value: 'a' },
      [
        { label: 'c', value: 'c', options: [{ label: 'a', value: 'a' }] },
        { label: 'b', value: 'b' },
      ],
      { label: 'c', value: 'c', options: [{ label: 'a', value: 'a' }] },
    ],
    [
      'Option has group with multi option and should return group completed',
      { label: 'z', value: 'z' },
      [
        {
          label: 'c',
          value: 'c',
          options: [
            { label: 'a', value: 'a' },
            { label: 'z', value: 'z' },
          ],
        },
        { label: 'b', value: 'b' },
      ],
      {
        label: 'c',
        value: 'c',
        options: [
          { label: 'a', value: 'a' },
          { label: 'z', value: 'z' },
        ],
      },
    ],
    [
      'value is not defined',
      { label: 'z', value: 'z' },
      [
        {
          label: 'c',
          value: 'c',
          options: [{ label: 'a', value: 'a' }],
        },
        { label: 'b', value: 'b' },
      ],
      undefined,
    ],
  ];

  test.each(cases)('%s', (_title, val, options, expected) => {
    expect(findValueArray(val, options)).toEqual(expected);
  });
});
