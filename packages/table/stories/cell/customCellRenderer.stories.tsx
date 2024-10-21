import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import {
  BasicTable,
  TColDef,
  TData,
  TCellHorAlign,
  TCellRenderer,
} from '../../src';

import { Box, Button, Flex } from '@devoinc/genesys-ui';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Cell/customCellRenderer',
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
    check: 'bool',
  })
  .repeat(3)
  .generate() as TData;

const renderCreateCollectorButton = (rowIndex) => {
  return (
    <Box overflowX="hidden">
      <Button colorScheme={'accent'}>Crear incidencia</Button>
    </Box>
  );
};

const colDefsInitial: TColDef[] = [
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
    width: 850,
  },
  {
    cellRenderer: ({ rowIndex }: TCellRenderer) =>
      renderCreateCollectorButton(rowIndex),
    id: 'booleanValue',
    headerName: 'Button test',
    align: 'right' as TCellHorAlign,
    width: 150,
  },
];

const BasicCmp = () => {
  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          data={initialData}
          colDefs={colDefsInitial}
          maxHeight={'80vh'}
          rowHeight={60}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Basic: Story = {
  render: () => <BasicCmp />,
};
