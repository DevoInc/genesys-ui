import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import { BasicTable, TCellDef, TColDef, TData } from '../../src';

import { Flex } from '@devoinc/genesys-ui';
import { clickable } from 'packages/table/src/presets/cell';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Cell/Modes',
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
    name: 'name',
    age: 'age',
  })
  .repeat(3)
  .generate() as TData;

const colDefsInitial: TColDef[] = [
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
    editable: true,
    clickable: true,
    cellPreset: 'clickable',
  },
  {
    id: 'age',
    headerName: 'age',
    preset: 'number',
    editable: true,
    clickable: true,
    cellPreset: 'clickable',
  },
];

const cellDefs: TCellDef[] = [
  {
    colId: 'name',
    rowId: '0',
  }
]

const BasicCmp = () => {
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          data={initialData}
          cellDefs={cellDefs}
          colDefs={colDefsInitial}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Editable: Story = {
  render: () => <BasicCmp />,
};
