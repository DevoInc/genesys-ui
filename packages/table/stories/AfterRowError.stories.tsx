import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import {
  addAfterRowsToData,
  addAfterRowsToRowDefs,
  BasicTable,
  BooleanRenderer,
  orderDataByOrderStruct,
  TCellRenderer,
  TColDef,
  TData,
  TRowDef,
  useOrderStruct,
} from '../src';

import { ROW_HEIGHT_MD } from '../src/constants';
import { Flex, SwitchControl } from '@devoinc/genesys-ui';
import { useRenderAfterRow } from '../src/hooks';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/AfterRowError',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const BooleanCmp = ({ value, colDef, rowIndex }) => {
  const { onChange, id } = colDef;
  return (
    <SwitchControl
      size="sm"
      autoFocus
      checked={!!value}
      aria-label={`Switch ${id} ${rowIndex}`}
      onChange={() => {
        if (onChange) {
          onChange(!value, rowIndex);
        }
      }}
    />
  );
};

const initialData = Holo.of()
  .addType('index', (args = {}) => String(args.index + 1))
  .schema({
    check: 'bool',
    rowGrouping: false,
    id: 'index',
    booleanValue: 'bool',
    name: 'name',
  })
  .repeat(500)
  .generate() as TData;

const colDefsInitial = [
  // {
  //   id: 'id',
  //   preset: 'text',
  //   headerName: 'ID',
  //   cellRenderer: TextRenderer,
  //   sortable: true,
  // },
  {
    id: 'check',
    headerName: 'Boolean value',
    editable: true,
    cellRenderer: BooleanCmp,
  },
  {
    id: 'booleanValue',
    headerName: 'Boolean value',
    preset: 'boolean',
    editable: true,
    cellRenderer: BooleanRenderer,
  },
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
    editable: true,
    sortable: true,
  },
];

const initalRowDefs = [
  {
    id: '2',
    // style: 'background-color: rgb(255,200,200);',
    preset: 'deleted',
  },
  {
    id: `afterRow-2`,
    hide: false,
  },
];

const initialSelection = ['2'];

const BasicCmp = ({
  afterRowRenderer,
  afterRowHeight,
}: {
  afterRowRenderer:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode);
  afterRowHeight: number;
}) => {
  const { orderStruct, onSort } = useOrderStruct([
    { id: 'text', sort: 'desc' },
  ]);

  const [rowDefs, setRowDefs] = React.useState<TRowDef[]>();

  const { dataWithAfterRows } = React.useMemo(() => {
    const dataOrdered = [...initialData].sort(
      orderDataByOrderStruct(orderStruct),
    );
    const [dataWithAfterRows, afterRowIds] = addAfterRowsToData(dataOrdered);
    const newRowDef = addAfterRowsToRowDefs(
      initalRowDefs,
      afterRowIds,
      afterRowRenderer,
      afterRowHeight,
    );
    setRowDefs(newRowDef);
    return { dataWithAfterRows };
  }, [initialData]);

  const { colDefs } = useRenderAfterRow({
    rowDefs,
    initialSelection,
    onRowDefsChange: (newRowDefs) => {
      setRowDefs(newRowDefs);
    },
    colDefs: colDefsInitial,
  });

  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          data={dataWithAfterRows}
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          colDefs={colDefs}
          rowDefs={rowDefs}
          cellDefs={[
            {
              colId: 'name',
              rowId: '2',
              style: 'background-color: rgb(200,255,200);',
            },
          ]}
          maxHeight={'80vh'}
          rowHeight={ROW_HEIGHT_MD}
          resizableColumns={true}
          showFilters={false}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Basic: Story = {
  render: () => (
    <BasicCmp
      afterRowRenderer={({ row }) => row.name as string}
      afterRowHeight={36}
    />
  ),
};
