import { OrderColumn } from '../core/hooks/useOrderStruct';
import { Data } from '../declarations';
import { orderDataByOrderStruct } from './orderDataByOrderStruct';

describe('getOptionsFromData', () => {
  const cases: [string, Data, OrderColumn[], Data][] = [
    [
      'Order number desc',
      [
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 2, name: 'Jimmy Hogan', age: 20 },
      ],
      [{ id: 'id', sort: 'desc' }],
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
    ],
    [
      'Order number asc',
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
      [{ id: 'id', sort: 'asc' }],
      [
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 2, name: 'Jimmy Hogan', age: 20 },
      ],
    ],
    [
      'Order none',
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
      [],
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
    ],
    [
      'Order multi number',
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 3, name: 'Jimmy Hogan', age: 50 },
      ],
      [
        { id: 'id', sort: 'desc' },
        { id: 'age', sort: 'desc' },
      ],
      [
        { id: 3, name: 'Jimmy Hogan', age: 50 },
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
    ],
    [
      'Order multi number-string',
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 3, name: 'Jimmy Hogan', age: 50 },
      ],
      [
        { id: 'age', sort: 'desc' },
        { id: 'name', sort: 'asc' },
      ],
      [
        { id: 3, name: 'Jimmy Hogan', age: 50 },
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 2, name: 'Jimmy Hogan', age: 20 },
      ],
    ],
    [
      'Order stirng desc',
      [
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 2, name: 'Jimmy Hogan', age: 20 },
      ],
      [{ id: 'name', sort: 'desc' }],
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
    ],
    [
      'Order string asc',
      [
        { id: 2, name: 'Jimmy Hogan', age: 20 },
        { id: 1, name: 'Ina Osborne', age: 20 },
      ],
      [{ id: 'name', sort: 'asc' }],
      [
        { id: 1, name: 'Ina Osborne', age: 20 },
        { id: 2, name: 'Jimmy Hogan', age: 20 },
      ],
    ],
  ];

  it.each(cases)('%s', (_title, data, orderStruct, expected) => {
    expect(orderDataByOrderStruct(data, orderStruct)).toEqual(expected);
  });
});
