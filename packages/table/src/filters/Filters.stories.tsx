import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import semver from 'semver';

import { Menu, InputControl } from '@devoinc/genesys-ui';

import {
  type TContextOptions,
  type TFilterContext,
  filterDataByFilterStruct,
  filterDataByText,
  useFilterStruct,
  updateColDefsWithFilterStruct,
  useBulkSelection,
  TBulkContext,
  BasicTable,
  TColDef,
  TNumberFilterValue,
} from '../../src';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Filters',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const data = [
  {
    text: 'Christine Jimenez',
    num: 60,
    date: new Date(2024, 9, 1, 0, 0, 0),
    bool: false,
    option: 'A',
    multiple: ['M', 'N'],
  },
  {
    text: 'Ina Osborne',
    num: 20,
    date: new Date(2024, 9, 2, 0, 0, 0),
    bool: true,
    option: 'B',
    multiple: ['N'],
  },
  {
    text: 'Jimmy Hogan',
    num: 20,
    date: new Date(2024, 9, 3, 0, 0, 0),
    bool: true,
    option: 'C',
    multiple: ['M', 'O'],
  },
  {
    text: 'Myra Bell',
    num: 57,
    date: new Date(2024, 9, 4, 0, 0, 0),
    bool: true,
    option: 'C',
    multiple: ['N', 'O'],
  },
  {
    text: 'Jane Padilla',
    num: 46,
    date: new Date(2024, 9, 5, 0, 0, 0),
    bool: false,
    option: 'B',
    multiple: ['O'],
  },
  {
    text: 'Isabelle Gardner',
    num: 31,
    date: new Date(2024, 9, 6, 0, 0, 0),
    bool: true,
    option: 'A',
    multiple: ['M'],
  },
  {
    text: 'Sean Parsons',
    num: 31,
    date: new Date(2024, 9, 7, 0, 0, 0),
    bool: true,
    option: 'A',
    multiple: ['N', 'O'],
  },
  {
    text: 'Alvin Castro',
    num: 55,
    date: new Date(2024, 9, 8, 0, 0, 0),
    bool: false,
    option: 'B',
    multiple: ['M', 'N', 'O'],
  },
  {
    text: 'Lawrence Holland',
    num: 56,
    date: new Date(2024, 9, 9, 0, 0, 0),
    bool: false,
    option: 'B',
    multiple: ['O'],
  },
  {
    text: 'Brandon Robertson',
    num: 41,
    date: new Date(2024, 9, 10, 0, 0, 0),
    bool: true,
    option: 'C',
    multiple: ['N'],
  },
];

const colDefs = [
  {
    id: 'text',
    headerName: 'Text',
    preset: 'text',
    sortable: true,
  },
  {
    id: 'num',
    headerName: 'Number',
    preset: 'number',
    context: {
      showAdvancedFilter: true,
      showReset: true,
    } as TFilterContext,
  },
  {
    id: 'date',
    headerName: 'Date',
    preset: 'date',
    context: {
      showAdvancedFilter: true,
      showReset: true,
    } as TFilterContext,
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
    } as TContextOptions,
  },
  {
    id: 'multiple',
    headerName: 'Multiple',
    preset: 'options',
    context: {
      options: {
        M: { label: 'M' },
        N: { label: 'N' },
        O: { label: 'O' },
      },
    } as TContextOptions,
  },
];

const FilterTable = () => {
  const [ textFilter, setTextFilter ] = React.useState(undefined);
  const { filterStruct, onFilter } = useFilterStruct();
  const dataFiltered = [...data]
    .filter(filterDataByText(textFilter, colDefs))
    .filter(filterDataByFilterStruct(filterStruct));

  return (
    <>
      <InputControl
        aria-label="Contains text..."
        placeholder="Contains text..."
        type="search"
        value={ textFilter }
        onChange={(ev) => {
          setTextFilter(ev.target.value);
        }}
      />
      <BasicTable
        showFilters
        onFilter={(curColDef, value, type) => {
          onFilter(curColDef.id, value, type);
        }}
        colDefs={updateColDefsWithFilterStruct(colDefs, filterStruct)}
        data={dataFiltered}
      />
    </>
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
      } as TBulkContext,
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
      } as TFilterContext,
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
      } as TContextOptions,
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

export const FilterAndBulkActions: Story = {
  render: () => <FilterAndBulkActionsTable />,
};

const FiltersCustomTable = () => {
  const colDef: TColDef[] = [
    {
      id: 'version',
      headerName: 'Text',
      preset: 'text',
    },
    {
      id: 'num',
      headerName: 'Number',
      preset: 'number',
      cellFilter: ({ colDef, onChange }) => {
        const context = colDef?.context as TFilterContext;
        const filterValue = context?.filterValue as TNumberFilterValue;
        const value = filterValue?.value ?? '';
        return (
          <InputControl
            size="sm"
            aria-label="filter"
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChange(
                {
                  value: event.currentTarget.value,
                } as TNumberFilterValue,
                'number',
              );
            }}
          />
        );
      },
    },
  ];

  const data = [
    {
      version: 'Major',
      num: '1.0.0',
    },
    {
      version: 'Minor',
      num: '1.1.0',
    },
    {
      version: 'Patch',
      num: '1.1.1',
    },
  ];

  const { filterStruct, onFilter } = useFilterStruct();
  const dataFiltered = [...data].filter(
    filterDataByFilterStruct(filterStruct, {
      num: (data: string, filterValue: { value: string }) => {
        return semver.valid(filterValue.value)
          ? semver.gt(data, filterValue.value)
          : true;
      },
    }),
  );

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

export const FiltersCustom: Story = {
  render: () => <FiltersCustomTable />,
};

const dataGlobal = [
  {
    text: 'Christine Jimenez',
    num: 60,
    bool: false,
    option: 'A',
  },
  {
    text: 'Ina Osborne',
    num: 20,
    bool: true,
    option:'B',
  },
  {
    text: 'Jimmy Hogan',
    num: 20,
    bool: true,
    option: 'C',
  },
  {
    text: 'Myra Bell',
    num: 57,
    bool: true,
    option: 'C',
  },
  {
    text: 'Jane Padilla', num: 46, bool: false,
    option: 'B',
  },
  {
    text: 'Isabelle Gardner', num: 31, bool: true,
    option: 'A',
  },
  {
    text: 'Sean Parsons', num: 31, bool: true,
    option: 'A',
  },
  {
    text: 'Alvin Castro', num: 55, bool: false,
    option: 'B',
  },
  {
    text: 'Lawrence Holland', num: 56, bool: false,
    option: 'B',
  },
  {
    text: 'Brandon Robertson', num: 41, bool: true,
    option: 'C',
  },
];

const GlobalTextFilterTable = () => {

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
      } as TFilterContext,
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
      } as TContextOptions,
    },
  ];

  const [ textFilter, setTextFilter ] = React.useState(undefined);
  const { filterStruct, onFilter } = useFilterStruct();
  const dataFiltered = [...dataGlobal]
    .filter(filterDataByText(textFilter, colDefs))
    .filter(filterDataByFilterStruct(filterStruct));

  return (
    <>
      <InputControl
        aria-label="Contains text..."
        placeholder="Contains text..."
        type="search"
        value={ textFilter }
        onChange={(ev) => {
          setTextFilter(ev.target.value);
        }}
      />
      <BasicTable
        showFilters
        onFilter={(curColDef, value, type) => {
          onFilter(curColDef.id, value, type);
        }}
        colDefs={updateColDefsWithFilterStruct(colDefs, filterStruct)}
        data={dataFiltered}
      />
    </>
  );
};

export const GlobalTextFilter: Story = {
  render: () => <GlobalTextFilterTable />,
};

