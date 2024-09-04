import { describe, test, expect } from 'vitest';

import { TRowDef } from '../../declarations';
import {
  addAfterRowToRowDefs,
  getRowDef,
  setHideRowDef,
} from './addAfterRowsToRowDefs';

describe('Add afterrow to row defs', () => {
  describe('getRowDef', () => {
    const cases: [string, TRowDef[], string, TRowDef][] = [
      ['empty row defs return undefined', [], '1', undefined],
      ['id null return undefined', [{ id: '1' }], null, undefined],
      ['rowDef null return undefined', null, '1', undefined],
      ['return element rowDef', [{ id: '1' }], '1', { id: '1' }],
      ['id not find in rowDef', [{ id: '1' }], '2', undefined],
    ];

    test.each(cases)('%s', (_title, rowDefs, id, expected) => {
      expect(getRowDef(rowDefs, id)).toEqual(expected);
    });
  });

  describe('addAfterRowToRowDefs', () => {
    const cases: [string, TRowDef[], string, TRowDef[]][] = [
      [
        'add element with rowdefs empty',
        [],
        '1',
        [{ id: `afterRow-1`, hide: false }],
      ],
      [
        'add element with rowdefs > 0',
        [{ id: `afterRow-1`, hide: false }],
        '2',
        [
          { id: `afterRow-1`, hide: false },
          { id: `afterRow-2`, hide: false },
        ],
      ],
      ['add element with rowdefs empty', null, '1', undefined],
    ];

    test.each(cases)('%s', (_title, rowDefs, id, expected) => {
      expect(addAfterRowToRowDefs(rowDefs, id, () => null, 13)).toMatchObject(
        expected,
      );
    });
  });

  describe('setHideRowDef', () => {
    const cases: [string, TRowDef[], string, boolean, TRowDef[]][] = [
      ['empty rowdefs return empty rowdefs', [], '1', true, []],
      ['rowdefs null return undefined', null, '1', true, undefined],
      [
        'changed visible to no visible',
        [{ id: `afterRow-1`, hide: false }],
        '1',
        false,
        [{ id: `afterRow-1`, hide: true }],
      ],
      [
        'changed no visible to visible',
        [{ id: `afterRow-1`, hide: true }],
        '1',
        false,
        [{ id: `afterRow-1`, hide: true }],
      ],
      [
        'id and isOpened null return same rowdefs',
        [{ id: `afterRow-1`, hide: true }],
        null,
        null,
        [{ id: `afterRow-1`, hide: true }],
      ],
    ];

    test.each(cases)('%s', (_title, rowDefs, id, isOpened, expected) => {
      expect(setHideRowDef(rowDefs, id, isOpened)).toEqual(expected);
    });
  });
});
