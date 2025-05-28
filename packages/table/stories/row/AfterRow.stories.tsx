import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Holo } from '@devoinc/holo';

import {
  addAfterRowsToData,
  addAfterRowsToRowDefs,
  TCellRenderer,
  BasicTable,
  TColDef,
  TData,
  TRowDef,
} from '../../src';

import { Flex } from '@devoinc/genesys-ui';
import { useOnDemandAfterRow, useRenderAfterRow } from '../../src/hooks';
import { useSetHighlight } from '../../src/hooks/useSetHighlight';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Row/AfterRow',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const initialData = Holo.of()
  .addType('index', (args = {}) => String(args.index + 1))
  .schema({
    check: 'bool',
    rowGrouping: false,
    id: 'index',
    booleanValue: 'bool',
    name: 'name',
  })
  .repeat(3)
  .generate() as TData;

const colDefsInitial: TColDef[] = [
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
  },
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
  },
];

const initalRowDefs = [];

const BasicCmp = ({
  afterRowRenderer,
  afterRowHeight,
  highlightRowOnHover,
  highlightColumnOnHover,
}: {
  afterRowRenderer:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode);
  afterRowHeight: number;
  highlightRowOnHover?: boolean;
  highlightColumnOnHover?: boolean;
}) => {
  const [rowDefs, setRowDefs] = React.useState<TRowDef[]>();

  const { dataWithAfterRows } = React.useMemo(() => {
    const [dataWithAfterRows, afterRowIds] = addAfterRowsToData(initialData);
    const newRowDef = addAfterRowsToRowDefs(
      initalRowDefs,
      afterRowIds,
      afterRowRenderer,
      afterRowHeight,
    );
    setRowDefs(newRowDef);
    return { dataWithAfterRows };
  }, [initialData]);

  const { newColDefs, onCellMouseEnter, onCellMouseLeave } =
    useSetHighlight(colDefsInitial);

  const { colDefs } = useRenderAfterRow({
    rowDefs,
    initialSelection: [],
    onRowDefsChange: (newRowDefs) => {
      setRowDefs(newRowDefs);
    },
    colDefs: highlightColumnOnHover ? newColDefs : colDefsInitial,
  });

  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          id={'tableAfterRowStorie'}
          data={dataWithAfterRows}
          colDefs={colDefs}
          rowDefs={rowDefs}
          onCellMouseEnter={highlightColumnOnHover && onCellMouseEnter}
          onCellMouseLeave={highlightColumnOnHover && onCellMouseLeave}
          highlightRowOnHover={highlightRowOnHover}
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
    initialSelection: [],
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
        <BasicTable
          id={'tableAfterRowNoRenderStorie'}
          data={data}
          colDefs={colDefs}
          rowDefs={rowDefs}
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

export const BasicHighlighted: Story = {
  render: () => (
    <BasicCmp
      afterRowRenderer={({ row }) => row.name as string}
      afterRowHeight={36}
      highlightRowOnHover={true}
      highlightColumnOnHover={true}
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
            id={'tableAfterRowCaseStorie'}
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      )}
      afterRowHeight={350}
    />
  ),
};
