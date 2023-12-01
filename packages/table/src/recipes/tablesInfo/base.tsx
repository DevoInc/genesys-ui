import * as React from 'react';
import { Button, DropdownMenu } from '@devoinc/genesys-ui';
import { Holo } from '@devoinc/holo';
import { TableOptionsProps } from '../../declarations';

let index = 1;

export const baseData = Holo.of()
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
    profession: 'profession',
    email: 'email',
    quote: 'sentence',
    IP6: 'ipv6',
    address: 'address',
    website: 'url',
    secondaryWebsite: 'url',
  })
  .repeat(200)
  .generate();

export const baseOptions: TableOptionsProps = {
  defaultColumnDef: {
    editable: false,
  },
  visualOptions: {
    maxHeight: '80vh',
    minWidth: 1800,
    rowHeight: 'md',
  },
  columnDefs: [
    {
      id: 'id',
      type: 'text',
      headerName: 'ID',
      cellStyle: {
        width: 3,
      },
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
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'booleanValue',
      headerName: 'Boolean value',
      type: 'tagBoolean',
      cellStyle: {
        width: 6,
      },
    },
    {
      id: 'name',
      headerName: 'Name',
      type: 'text',
      editable: true,
      cellStyle: {
        width: 7,
      },
    },
    {
      id: 'age',
      headerName: 'Age',
      type: 'number',
      cellStyle: {
        width: 3,
      },
    },
    {
      id: 'company',
      headerName: 'Company',
      type: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'balance',
      headerName: 'Balance',
      type: 'number',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'status',
      headerName: 'Status',
      type: 'tag',
      editable: true,
      cellStyle: {
        width: 6,
      },
    },
    {
      id: 'picture',
      headerName: 'Image (URL)',
      type: 'link',
      cellStyle: {
        width: 9,
      },
    },
    {
      id: 'timestamp',
      headerName: 'Date',
      type: 'date',
      editable: true,
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'tags',
      headerName: 'Tags',
      type: 'tags',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'profession',
      headerName: 'Profession',
      type: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'email',
      headerName: 'Email',
      type: 'link',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'quote',
      headerName: 'Favourite quote',
      type: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'address',
      headerName: 'Address',
      type: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'website',
      headerName: 'Website',
      type: 'link',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'secondaryWebsite',
      headerName: 'Secondary Website',
      type: 'link',
    },
  ],
};
