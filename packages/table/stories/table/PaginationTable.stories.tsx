import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import { BasicTable, TColDef, TData } from '../../src';

import { dataRangePagination, Flex, Pagination } from '@devoinc/genesys-ui';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/pagination',
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
  .repeat(30)
  .generate() as TData;

const colDefsInitial: TColDef[] = [
  {
    id: 'id',
    preset: 'text',
    headerName: 'ID',
  },
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

export const Basic: Story = {
  render: () =>
    (() => {
      const [page, setPage] = React.useState(0);
      const [pageSize, setPageSize] = React.useState(10);

      const data = dataRangePagination(initialData, page, pageSize);
      return (
        <>
          <Pagination
            totalItems={initialData.length}
            page={page}
            pageSize={pageSize}
            onChange={(newPage) => {
              setPage(newPage);
            }}
            onPageSizeChange={(newPageSize) => {
              setPage(Math.floor((page * pageSize) / newPageSize));
              setPageSize(newPageSize);
            }}
            marginBottom="cmp-md"
          />

          <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
            <Flex.Item>
              <BasicTable
                data={data}
                colDefs={colDefsInitial}
                rowDefs={initalRowDefs}
              />
            </Flex.Item>
          </Flex>
        </>
      );
    })(),
  parameters: { controls: false },
};
