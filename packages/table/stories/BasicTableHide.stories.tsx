import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import {
  BooleanRenderer,
  orderDataByOrderStruct,
  RowGroupingRenderer,
  Table,
  TColDef,
  TextRenderer,
  useOrderStruct,
  useRowGrouping,
} from '../src';
import { ROW_HEIGHT_MD } from '../src/constants';
import { Flex } from '@devoinc/genesys-ui';
import { useAfterRow } from '../src/hooks/useAfterRow';

const meta: Meta<typeof Table> = {
  title: 'Components/Layout/Table/AfterRow/Basic',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const initialData = Holo.of()
  .addType('index', (args = {}) => String(args.index + 1))
  .addType('rowGrouping', (args = {}) => false)
  .schema({
    rowGrouping: 'rowGrouping',
    id: 'index',
    booleanValue: 'bool',
    name: 'name',
  })
  .repeat(20)
  .generate();

const BasicCmp = () => {
  const { orderStruct, onSort } = useOrderStruct([
    { id: 'text', sort: 'desc' },
  ]);

  const dataOrdered = [...initialData].sort(
    orderDataByOrderStruct(orderStruct),
  );

  // const { rowSelection, toggle } = useRowGrouping({
  //   data: dataOrdered,
  //   initialSelection: [],
  // });

  const colDefsInitial = [
    {
      id: 'id',
      preset: 'text',
      headerName: 'ID',
      cellRenderer: TextRenderer,
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
      cellRenderer: TextRenderer,
    },
  ];

  const { data, rowDefs, colDefs } = useAfterRow({
    data: dataOrdered,
    rowDefs: [],
    colDefs: colDefsInitial,
    renderAfterRow: (row) => row.name
  });
  return (
    <Flex flexDirection="column" gap="cmp-md">
      <Flex.Item>
        <Table
          data={data}
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          colDefs={colDefs}
          rowDefs={rowDefs}
          maxHeight={'80vh'}
          rowHeight={ROW_HEIGHT_MD}
          resizableColumns={true}
          highlightColumnsOnHover={true}
          showFilters={true}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Basic: Story = {
  render: () => <BasicCmp />,
};
