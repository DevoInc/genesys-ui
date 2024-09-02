import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import {
  addAfterRowsToData,
  addAfterRowsToRowDefs,
  BooleanRenderer,
  orderDataByOrderStruct,
  Table,
  TColDef,
  TextRenderer,
  useOrderStruct,
} from '../src';

import { ROW_HEIGHT_MD } from '../src/constants';
import { Flex } from '@devoinc/genesys-ui';
import { useAfterRow } from '../src/hooks';

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

const BasicCmp = ({ afterRowRenderer, afterRowHeight }) => {
  const { orderStruct, onSort } = useOrderStruct([
    { id: 'text', sort: 'desc' },
  ]);

  const dataOrdered = [...initialData].sort(
    orderDataByOrderStruct(orderStruct),
  );

  const [dataWithAfterRows, afterRowIds] = addAfterRowsToData(dataOrdered);

  const colDefsInitial = [
    {
      id: 'id',
      preset: 'text',
      headerName: 'ID',
      cellRenderer: TextRenderer,
      sortable: true,
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
      sortable: true,
    },
  ];

  const [rowDefs, setRowDefs] = React.useState(
    addAfterRowsToRowDefs(afterRowIds, afterRowRenderer, afterRowHeight),
  );

  const { colDefs } = useAfterRow({
    rowDefs,
    onRowDefsChange: (newRowDefs) => {
      setRowDefs(newRowDefs);
    },
    colDefs: colDefsInitial,
  });

  return (
    <Flex flexDirection="column" gap="cmp-md">
      <Flex.Item>
        <Table
          data={dataWithAfterRows}
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          colDefs={colDefs}
          rowDefs={rowDefs}
          maxHeight={'80vh'}
          rowHeight={ROW_HEIGHT_MD}
          resizableColumns={true}
          highlightColumnsOnHover={true}
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

export const RenderImg: Story = {
  render: () => (
    <BasicCmp
      afterRowHeight={200}
      afterRowRenderer={() => (
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt="Dinosaur"
          />
        </div>
      )}
    />
  ),
};
