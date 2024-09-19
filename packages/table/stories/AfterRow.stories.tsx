import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import {
  addAfterRowsToData,
  addAfterRowsToRowDefs,
  BasicTable,
  BooleanRenderer,
  orderDataByOrderStruct,
  Table,
  TCellRenderer,
  TColDef,
  TData,
  TextRenderer,
  TRowDef,
  useOrderStruct,
} from '../src';

import { ROW_HEIGHT_MD } from '../src/constants';
import { Flex } from '@devoinc/genesys-ui';
import { useOnDemandAfterRow, useRenderAfterRow } from '../src/hooks';

const meta: Meta<typeof Table> = {
  title: 'Components/Layout/Table/AfterRow',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const initialData = Holo.of()
  .addType('index', (args = {}) => String(args.index + 1))
  .schema({
    rowGrouping: false,
    id: 'index',
    booleanValue: 'bool',
    name: 'name',
  })
  .repeat(5)
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

const initalRowDefs = [
  {
    id: '2',
    style: 'background-color: rgb(255,200,200);',
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
        <Table
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

const BasicCmpNoRenderAfterRow = ({
  afterRowRenderer,
  afterRowHeight,
}: {
  afterRowRenderer:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode);
  afterRowHeight: number;
}) => {
  const [data, setData] = React.useState(initialData);

  const [rowDefs, setRowDefs] = React.useState<TRowDef[]>([]);

  const { colDefs } = useOnDemandAfterRow({
    rowDefs,
    onRowDefsChange: (newRowDefs) => {
      setRowDefs(newRowDefs);
    },
    colDefs: colDefsInitial,
    data,
    onDataChange: (newData) => {
      setData(newData);
    },
    afterRowRenderer,
    afterRowHeight,
  });

  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <Table
          data={data}
          colDefs={colDefs}
          rowDefs={rowDefs}
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

export const BasicNoRenderDom: Story = {
  render: () => (
    <BasicCmpNoRenderAfterRow
      afterRowRenderer={({ row }) => row.name as string}
      afterRowHeight={36}
    />
  ),
};

export const BasicNullHeight: Story = {
  render: () => (
    <BasicCmp
      afterRowRenderer={({ row }) => row.name as string}
      afterRowHeight={null}
    />
  ),
};

export const AfterRowTable: Story = {
  render: () => (
    <BasicCmp
      afterRowRenderer={({ row }) => (
        <div
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <BasicTable
            defaultColDef={{
              editable: false,
              sortable: true,
            }}
            colDefs={colDefsInitial}
            data={[row]}
          />
        </div>
      )}
      afterRowHeight={10}
    />
  ),
};

export const Iframe: Story = {
  render: () => (
    <BasicCmp
      afterRowRenderer={() => (
        <div
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oBgDzCTVt64?si=BooD1x0Qm1pFS65o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}
      afterRowHeight={350}
    />
  ),
};
