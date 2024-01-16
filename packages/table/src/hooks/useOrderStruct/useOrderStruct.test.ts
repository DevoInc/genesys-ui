import { renderHook } from '@testing-library/react';

import { useOrderStruct } from './useOrderStruct';
import { OrderColumn } from './declarations';

describe('getOptionsFromData', () => {
  const cases: [string, OrderColumn[], string, OrderColumn[]][] = [
    ['sort desc', [{ id: 'c1', sort: 'desc' }], 'c1', []],
    [
      'sort asc',
      [{ id: 'c1', sort: 'asc' }],
      'c1',
      [{ id: 'c1', sort: 'desc' }],
    ],
    ['sort none', [], 'c1', [{ id: 'c1', sort: 'asc' }]],
  ];

  it.each(cases)('%s', (_title, initial, id, expected) => {
    const { result } = renderHook(() => useOrderStruct(initial));
    renderHook(() => result.current.onSort(id));
    expect(result.current.orderStruct).toEqual(expected);
  });
});
