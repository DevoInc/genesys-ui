import { describe, test, expect } from 'vitest';

import { DEFAULT_COLDEF } from './../../constants';
import { TColDef, TDefaultColDef } from '../../declarations';
import { getCollatedColumns } from './columns';

const getCollatedColumnsCases: [
  string,
  TDefaultColDef,
  TColDef,
  TColDef[],
  TColDef,
][] = [
  [
    'No column definitions',
    DEFAULT_COLDEF,
    { id: 'null' },
    [],
    { id: 'null', headerName: 'Column' },
  ],
];

describe('Table', () => {
  describe('Utils', () => {
    describe('Columns', () => {
      describe('getCollatedColumns', () => {
        test.each(getCollatedColumnsCases)(
          '%s',
          (_title, defaultColDef, column, presets, expected) => {
            expect(getCollatedColumns(defaultColDef, column, presets)).toEqual(
              expected,
            );
          },
        );
      });
    });
  });
});
