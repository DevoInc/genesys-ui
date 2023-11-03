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
      headerName: 'id',
    },
    {
      id: 'menu',
      headerName: 'menu',
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
      headerName: 'booleanValue',
      type: 'tagBoolean',
    },
    {
      id: 'name',
      headerName: 'Name',
      type: 'text',
      editable: true,
    },
    {
      id: 'age',
      headerName: 'age',
      type: 'number',
    },
    {
      id: 'company',
      headerName: 'company',
      type: 'text',
    },
    {
      id: 'balance',
      headerName: 'balance',
      type: 'number',
    },
    {
      id: 'status',
      headerName: 'status',
      type: 'tag',
    },
    {
      id: 'picture',
      headerName: 'picture',
      type: 'link',
    },
    {
      id: 'timestamp',
      headerName: 'timestamp',
      type: 'date',
      editable: true,
    },
    {
      id: 'tags',
      headerName: 'tags',
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
