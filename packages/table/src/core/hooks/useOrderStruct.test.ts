import { OrderColumn, useOrderStruct } from './useOrderStruct';
import { renderHook } from '@testing-library/react';

describe('getOptionsFromData', () => {
  const cases: [string, OrderColumn[], string, OrderColumn[]][] = [
    ['Changed desc - none', [{ id: 'id', sort: 'desc' }], 'id', []],
    [
      'Changed asc - desc',
      [{ id: 'id', sort: 'asc' }],
      'id',
      [{ id: 'id', sort: 'desc' }],
    ],
    ['sort none', [], 'id', [{ id: 'id', sort: 'asc' }]],
  ];

  it.each(cases)('%s', (_title, initial, id, expected) => {
    const { result } = renderHook(() => useOrderStruct(initial));
    renderHook(() => result.current.onSort(id));
    expect(result.current.orderStruct).toEqual(expected);
  });
});
