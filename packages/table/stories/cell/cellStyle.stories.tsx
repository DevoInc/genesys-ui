import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Holo } from '@devoinc/holo';

import { BooleanRenderer, BasicTable, TColDef, TData } from '../../src';

import { ROW_HEIGHT_MD } from '../../src/constants';
import { Flex } from '@devoinc/genesys-ui';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Cell/Style',
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

const initalRowDefs = [{ id: '2' }];

const BasicCmp = () => {
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          id={'tableCellStyleStorie'}
          data={initialData}
          colDefs={colDefsInitial}
          rowDefs={initalRowDefs}
          cellDefs={[
            {
              colId: 'booleanValue',
              rowId: '2',
              style: 'background-color: rgb(200,200,200);',
            },
            {
              colId: 'name',
              rowId: '2',
              style: 'background-color: rgb(200,255,200);',
            },
          ]}
          maxHeight={'80vh'}
          rowHeight={ROW_HEIGHT_MD}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Basic: Story = {
  render: () => <BasicCmp />,
};
