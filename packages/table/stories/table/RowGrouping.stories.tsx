import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from '@devoinc/genesys-ui';

import {
  orderDataByOrderStruct,
  RowGroupingRenderer,
  Table,
  TColDef,
  TextRenderer,
  useOrderStruct,
  useRowGrouping,
} from '../../src';

const meta: Meta<typeof Table> = {
  title: 'Components/Layout/Table/Row/Grouping',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const initialData = Array.from({ length: 10 }).map((_, index) => ({
  rowGrouping: false,
  text: `text ${index}`,
}));

const BulkExample = () => {
  const { orderStruct, onSort } = useOrderStruct([
    { id: 'text', sort: 'desc' },
  ]);
  const dataOrdered = [...initialData].sort(
    orderDataByOrderStruct(orderStruct),
  );

  const { rowSelection, toggle } = useRowGrouping({
    data: dataOrdered,
    initialSelection: [],
  });

  return (
    <Flex flexDirection="column" gap="cmp-md">
      <Flex.Item>
        <Table
          id={'tableBulkExample'}
          data={dataOrdered}
          onSort={(colDef: TColDef) => {
            onSort(colDef.id);
          }}
          colDefs={[
            {
              id: 'rowGrouping',
              cellRenderer: RowGroupingRenderer,
              width: 46,
              context: {
                rowSelection,
                onRowGroupingChange: (rowIndex) => {
                  toggle(rowIndex);
                },
              },
            },
            {
              id: 'text',
              cellRenderer: TextRenderer,
              headerName: 'Text',
              sortable: true,
            },
          ]}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Base: Story = {
  render: () => <BulkExample />,
};
