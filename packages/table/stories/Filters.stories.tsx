import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@devoinc/genesys-ui';

import {
  type ContextOptions,
  type FilterContext,
  filterDataByFilterStruct,
  useFilterStruct,
  updateColDefsWithFilterStruct,
  useBulkSelection,
  BulkContext,
  BasicTable,
} from '../src';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Table/Filters',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const data = [
  { text: 'Christine Jimenez', num: 60, bool: false, option: 'A' },
  { text: 'Ina Osborne', num: 20, bool: true, option: 'B' },
  { text: 'Jimmy Hogan', num: 20, bool: true, option: 'C' },
  { text: 'Myra Bell', num: 57, bool: true, option: 'C' },
  { text: 'Jane Padilla', num: 46, bool: false, option: 'B' },
  { text: 'Isabelle Gardner', num: 31, bool: true, option: 'A' },
  { text: 'Sean Parsons', num: 31, bool: true, option: 'A' },
  { text: 'Alvin Castro', num: 55, bool: false, option: 'B' },
  { text: 'Lawrence Holland', num: 56, bool: false, option: 'B' },
  { text: 'Brandon Robertson', num: 41, bool: true, option: 'C' },
];

const colDefs = [
  {
    id: 'text',
    headerName: 'Text',
    preset: 'text',
  },
  {
    id: 'num',
    headerName: 'Number',
    preset: 'number',
    context: {
      showAdvancedFilter: true,
      showReset: true,
    } as FilterContext,
  },
  {
    id: 'bool',
    headerName: 'Boolean',
    preset: 'boolean',
  },
  {
    id: 'option',
    headerName: 'Options',
    preset: 'options',
    context: {
      options: {
        A: { label: 'Option A' },
        B: { label: 'Option B' },
        C: { label: 'Option C' },
      },
    } as ContextOptions,
  },
];

const FilterTable = () => {
  const { filterStruct, onFilter } = useFilterStruct();
  const dataFiltered = [...data].filter(filterDataByFilterStruct(filterStruct));

  return (
    <BasicTable
      showFilters
      onFilter={(curColDef, value, type) => {
        onFilter(curColDef.id, value, type);
      }}
      colDefs={updateColDefsWithFilterStruct(colDefs, filterStruct)}
      data={dataFiltered}
    />
  );
};

export const Base: Story = {
  render: () => <FilterTable />,
};

const FilterAndBulkActionsTable = () => {
  const { bulkSelection, toggleAll, toggle, headerBulkChecked } =
    useBulkSelection({
      dataLength: data.length,
      initialSelection: [],
    });

  const colDef = [
    {
      id: 'bulk',
      preset: 'bulk',
      width: 64,
      context: {
        headerBulkMenu:
          bulkSelection.length > 0
            ? ({ setOpened }) => (
                <Menu>
                  <Menu.Heading>
                    Bulk actions: {bulkSelection.length} Selected
                  </Menu.Heading>
                  <Menu.Separator />
                  <Menu.Item
                    onClick={() => {
                      setOpened(false);
                    }}
                  >
                    Dummy action 1
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => {
                      setOpened(false);
                    }}
                  >
                    Dummy action 2
                  </Menu.Item>
                </Menu>
              )
            : undefined,
        bulkSelection,
        headerBulkChecked,
        onBulkCheckboxChange: (rowIndex) => {
          toggle(rowIndex);
        },
        onHeaderBulkCheckboxChange: () => {
          toggleAll();
        },
      } as BulkContext,
    },
    {
      id: 'text',
      headerName: 'Text',
      preset: 'text',
    },
    {
      id: 'num',
      headerName: 'Number',
      preset: 'number',
      context: {
        showAdvancedFilter: true,
        showReset: true,
      } as FilterContext,
    },
    {
      id: 'bool',
      headerName: 'Boolean',
      preset: 'boolean',
    },
    {
      id: 'option',
      headerName: 'Options',
      preset: 'options',
      context: {
        options: {
          A: { label: 'Option A' },
          B: { label: 'Option B' },
          C: { label: 'Option C' },
        },
      } as ContextOptions,
    },
  ];

  const { filterStruct, onFilter } = useFilterStruct();
  const dataFiltered = [...data].filter(filterDataByFilterStruct(filterStruct));

  return (
    <BasicTable
      showFilters
      onFilter={(curColDef, value, type) => {
        onFilter(curColDef.id, value, type);
      }}
      colDefs={updateColDefsWithFilterStruct(colDef, filterStruct)}
      data={dataFiltered}
    />
  );
};

export const FiltersAndBulkActions: Story = {
  render: () => <FilterAndBulkActionsTable />,
};
