import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { DropdownMenu, Button, Flex } from '@devoinc/genesys-ui';
import { TableOptionsProps } from '../declarations';
import { BasicTable } from './Table';

let index = 1;

const data = Holo.of()
  .schema({
    id: () => index++,
    menu: 'bool',
    booleanValue: 'bool',
    name: 'name',
    age: 'age',
    company: 'company',
    balance: 'euro',
    status: () => Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
    picture: 'avatar',
    timestamp: 'timestamp',
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
  .repeat(200)
  .generate();

const tableOptions: TableOptionsProps = {
  defaultColumnDef: {
    editable: false,
  },
  style: {
    wrapper: {
      maxHeight: '100%',
    },
    body: {
      height: '100%',
    },
    row: {
      height: 30,
    },
  },
  columnDefs: [
    {
      id: 'id',
      type: 'text',
      headerName: 'ID',
    },
    {
      id: 'menu',
      headerName: 'Menu',
      CellRenderer: (params) => {
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
                  console.log(params.columnDef.headerName);
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
      id: 'booleanValue',
      headerName: 'Boolean value',
      type: 'tagBoolean',
      cellStyle: {
        width: 30,
      },
    },
    {
      id: 'name',
      headerName: 'Name',
      type: 'text',
      editable: true,
    },
    {
      id: 'age',
      headerName: 'Age',
      type: 'number',
    },
    {
      id: 'company',
      headerName: 'Company',
      type: 'text',
    },
    {
      id: 'balance',
      headerName: 'Balance',
      type: 'number',
    },
    {
      id: 'status',
      headerName: 'Status',
      type: 'tag',
    },
    {
      id: 'picture',
      headerName: 'Image (URL)',
      type: 'link',
    },
    {
      id: 'timestamp',
      headerName: 'Date',
      type: 'date',
      editable: true,
    },
    {
      id: 'tags',
      headerName: 'Tags',
      type: 'tags',
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
      return (
        <Flex height="100%" width="100%" flex-direction="column">
          <BasicTable tableOptions={tableOptions} data={data} />
        </Flex>
      );
    })(),
};
