import { describe, test, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useOrderStruct } from './useOrderStruct';
import type { TOrderColumn } from './declarations';

describe('getOptionsFromData', () => {
  const cases: [string, TOrderColumn[], string, TOrderColumn[]][] = [
    ['sort desc', [{ id: 'c1', sort: 'desc' }], 'c1', []],
    [
      'sort asc',
      [{ id: 'c1', sort: 'asc' }],
      'c1',
      [{ id: 'c1', sort: 'desc' }],
    ],
    ['sort none', [], 'c1', [{ id: 'c1', sort: 'asc' }]],
  ];

  test.each(cases)('%s', (_title, initial, id, expected) => {
    const { result } = renderHook(() => useOrderStruct(initial));
    renderHook(() => result.current.onSorting(id));
    expect(result.current.orderStruct).toEqual(expected);
  });
});
