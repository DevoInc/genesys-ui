import * as React from 'react';
import { Button, DropdownMenu } from '@devoinc/genesys-ui';
import { Holo } from '@devoinc/holo';
import { CellRendererParams, TableOptionsProps } from '../../declarations';

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
          { text: 'Developer', colorScheme: 'data-magenta' },
          { text: 'Engineer', colorScheme: 'data-purple' },
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
    minWidth: 800,
    resizableColumns: true,
    highlightColumnsOnHover: true,
  },
  columnDefs: [
    {
      id: 'id',
      preset: 'text',
      headerName: 'ID',
      cellStyle: {
        width: 3,
      },
    },
    {
      id: 'menu',
      headerName: 'Menu',
      cellRenderer: (params: CellRendererParams) => {
        return (
          <DropdownMenu
            items={[
              {
                type: 'itemSelectable',
                label: 'Testing menu',
                shortcut: "⌘ '",
                title: 'Testing menu',
                onChange: () => {
                  console.log(params.columnDef.headerName);
                },
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
      headerName: 'Active',
      preset: 'tagBoolean',
      editable: true,
      cellStyle: {
        width: 6,
      },
    },
    {
      id: 'name',
      headerName: 'Name',
      preset: 'text',
      editable: true,
      cellStyle: {
        width: 7,
      },
    },
    {
      id: 'age',
      headerName: 'Age',
      preset: 'number',
      editable: true,
      cellStyle: {
        width: 3,
      },
    },
    {
      id: 'company',
      headerName: 'Company',
      preset: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'balance',
      headerName: 'Balance',
      preset: 'number',
      editable: true,
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'status',
      headerName: 'Status',
      preset: 'tag',
      editable: true,
      cellStyle: {
        width: 6,
      },
    },
    {
      id: 'picture',
      headerName: 'Image (URL)',
      preset: 'link',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'timestamp',
      headerName: 'Date',
      preset: 'date',
      editable: true,
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'tags',
      headerName: 'Tags',
      preset: 'tags',
      editable: true,
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'profession',
      headerName: 'Profession',
      preset: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'email',
      headerName: 'Email',
      preset: 'link',
      cellStyle: {
        width: 10,
      },
    },
    {
      id: 'quote',
      headerName: 'Favourite quote',
      preset: 'text',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'address',
      headerName: 'Address',
      preset: 'text',
      cellStyle: {
        width: 10,
      },
    },
    {
      id: 'website',
      headerName: 'Website',
      preset: 'link',
      cellStyle: {
        width: 5,
      },
    },
    {
      id: 'secondaryWebsite',
      headerName: 'Secondary Website',
      preset: 'link',
      cellStyle: {
        width: 10,
      },
    },
  ],
};
