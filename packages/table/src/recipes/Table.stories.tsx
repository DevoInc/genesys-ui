import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';
import { DropdownMenu, Button } from '@devoinc/genesys-ui';

import { TableOptionsProps } from '../declarations';
import { BasicTable } from './Table';

const data = Holo.of()
  .schema({
    name: 'name',
    company: 'company',
    age: 'age',
    about: 'paragraph',
    picture: 'avatar',
    balance: 'euro',
    timestamp: 'timestamp',
    booleanValue: 'bool',
    status: () => Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
    tags: () =>
      Holo.chance.pickset(
        [
          { text: 'Coworker', colorScheme: 'success' },
          { text: 'Developer', colorScheme: 'warning' },
          { text: 'Engineer', colorScheme: 'error' },
          { text: 'Components', colorScheme: 'data-blue' },
        ],
        Holo.chance.integer({ min: 1, max: 4 }),
      ),
  })
  .repeat(20)
  .generate();

const TableOptions: TableOptionsProps = {
  defaultColumnDef: {
    editable: false,
  },
  columnDefs: [
    {
      colId: 'menu',
      field: 'menu',
      headerName: 'menu',
      CellRenderer: ({ value, columnDef }) => {
        return (
          <DropdownMenu
            items={[
              {
                type: 'itemSelectable',
                label: 'Testing menu',
                shortcut: "⌘ '",
                title: 'Testing menu',
                state: 'featured',
                onChange: () => {
                  console.log(columnDef.headerName);
                },
                defaultChecked: true,
              },
            ]}
            label="Actions"
            triggerComponent={Button}
          />
        );
      },
    },
    {
      colId: 'booleanValue',
      field: 'booleanValue',
      headerName: 'booleanValue',
      type: 'tagBoolean',
    },
    {
      colId: 'name',
      field: 'name',
      headerName: 'Name',
      type: 'text',
    },
    {
      colId: 'age',
      field: 'age',
      headerName: 'age',
      type: 'number',
    },
    {
      colId: 'company',
      field: 'company',
      headerName: 'company',
      type: 'text',
    },
    {
      colId: 'balance',
      field: 'balance',
      headerName: 'balance',
      type: 'number',
    },
    {
      colId: 'status',
      field: 'status',
      headerName: 'status',
      type: 'tag',
    },
    {
      colId: 'picture',
      field: 'picture',
      headerName: 'picture',
      type: 'link',
    },
    {
      colId: 'timestamp',
      field: 'timestamp',
      headerName: 'timestamp',
      type: 'date',
    },
    {
      colId: 'tags',
      field: 'tags',
      headerName: 'tags',
      type: 'tags',
    },
    {
      colId: 'about',
      field: 'about',
      headerName: 'about',
      type: 'text',
    },
  ],
};

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Table',
  component: BasicTable,
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Base: Story = {
  render: () =>
    (() => {
      return <BasicTable tableOptions={TableOptions} data={data} />;
    })(),
};