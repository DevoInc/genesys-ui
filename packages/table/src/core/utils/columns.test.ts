import { DEFAULT_VIRTUAL_COLUMN, DEFAULT_COLDEF } from './../../constants';
import { VirtualItem } from '@tanstack/react-virtual';
import { ColDef, DefaultColDef } from '../../declarations';
import { getColDefByID, getCollatedColumns } from './columns';
import { ColumnType } from '../../types/declarations';

const colDefsMock: ColDef[] = [
  { id: 'col0' },
  { id: 'col1' },
  { id: 'example' },
  { id: 'col3' },
];

const getColDefByIDCases: [string, ColDef[], VirtualItem, ColDef][] = [
  ['No column definitions', [], DEFAULT_VIRTUAL_COLUMN, undefined],
  ['No virtual column', colDefsMock, null, undefined],
  ['Standard case', colDefsMock, DEFAULT_VIRTUAL_COLUMN, colDefsMock[2]],
  [
    'Column not found',
    colDefsMock.slice(0, 1),
    DEFAULT_VIRTUAL_COLUMN,
    undefined,
  ],
];

const getCollatedColumnsCases: [
  string,
  DefaultColDef,
  ColDef[],
  ColumnType[],
  ColDef[],
][] = [['No column definitions', DEFAULT_COLDEF, [], [], []]];

describe('Table', () => {
  describe('Utils', () => {
    describe('Columns', () => {
      describe('getColDefByID', () => {
        it.each(getColDefByIDCases)(
          '%s',
          (_title, colDefs, virtualColumn, expected) => {
            expect(getColDefByID(colDefs, virtualColumn)).toEqual(expected);
          },
        );
      });
      describe('getCollatedColumns', () => {
        it.each(getCollatedColumnsCases)(
          '%s',
          (_title, defaultColDef, colDefs, types, expected) => {
            expect(getCollatedColumns(defaultColDef, colDefs, types)).toEqual(
              expected,
            );
          },
        );
      });
    });
  });
});
