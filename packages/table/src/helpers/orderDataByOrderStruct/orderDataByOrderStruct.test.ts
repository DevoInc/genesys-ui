import { OrderColumn } from '../../hooks';
import { Data, Row } from '../../declarations';
import {
  CustomSortFns,
  orderDataByOrderStruct,
} from '../orderDataByOrderStruct/orderDataByOrderStruct';

const statusOrder = ['success', 'warning', 'error'];

describe('orderDataByOrderStruct', () => {
  const cases: [string, Data, OrderColumn[], CustomSortFns, Data][] = [
    [
      'Order number desc',
      [{ c1: 1 }, { c1: 2 }],
      [{ id: 'c1', sort: 'desc' }],
      {},
      [{ c1: 2 }, { c1: 1 }],
    ],
    [
      'Order number asc',
      [{ c1: 2 }, { c1: 1 }],
      [{ id: 'c1', sort: 'asc' }],
      {},
      [{ c1: 1 }, { c1: 2 }],
    ],
    ['Order none', [{ c1: 2 }, { c1: 1 }], [], {}, [{ c1: 2 }, { c1: 1 }]],
    [
      'Order multi number',
      [
        { c1: 2, c2: 1 },
        { c1: 1, c2: 1 },
        { c1: 2, c2: 2 },
      ],
      [
        { id: 'c1', sort: 'desc' },
        { id: 'c2', sort: 'desc' },
      ],
      {},
      [
        { c1: 2, c2: 2 },
        { c1: 2, c2: 1 },
        { c1: 1, c2: 1 },
      ],
    ],
    [
      'Order multi number-string',
      [
        { c1: 'b', c2: 1 },
        { c1: 'a', c2: 1 },
        { c1: 'b', c2: 2 },
      ],
      [
        { id: 'c2', sort: 'desc' },
        { id: 'c1', sort: 'asc' },
      ],
      {},
      [
        { c1: 'b', c2: 2 },
        { c1: 'a', c2: 1 },
        { c1: 'b', c2: 1 },
      ],
    ],
    [
      'Order stirng desc',
      [{ c1: 'a' }, { c1: 'b' }],
      [{ id: 'c1', sort: 'desc' }],
      {},
      [{ c1: 'b' }, { c1: 'a' }],
    ],
    [
      'Order string asc',
      [{ c1: 'b' }, { c1: 'a' }],
      [{ id: 'c1', sort: 'asc' }],
      {},
      [{ c1: 'a' }, { c1: 'b' }],
    ],
    [
      'custom order fn',
      [{ c1: 'error' }, { c1: 'success' }, { c1: 'warning' }],
      [{ id: 'c1', sort: 'asc' }],
      {
        c1: (a: Row, b: Row, sort: 'asc' | 'desc') =>
          sort === 'asc'
            ? statusOrder.indexOf(String(a.c1)) -
              statusOrder.indexOf(String(b.c1))
            : sort === 'desc'
              ? statusOrder.indexOf(String(b.c1)) -
                statusOrder.indexOf(String(a.c1))
              : 0,
      },
      [{ c1: 'success' }, { c1: 'warning' }, { c1: 'error' }],
    ],
  ];

  it.each(cases)('%s', (_title, data, orderStruct, customSortFns, expected) => {
    expect(
      data.sort(orderDataByOrderStruct(orderStruct, customSortFns)),
    ).toEqual(expected);
  });
});
