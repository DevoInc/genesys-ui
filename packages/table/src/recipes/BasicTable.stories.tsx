import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, DropdownMenu } from '@devoinc/genesys-ui';
import { BasicTable } from './BasicTable';
import { Holo } from '@devoinc/holo';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Table/Recipes/BasicTable',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Base: Story = {
  args: {
    options: {
      defaultColDef: {
        editable: false,
      },
      visualOptions: {
        maxHeight: '80vh',
        minWidth: 2800,
        rowHeight: 'md',
        resizableColumns: true,
        highlightColumnsOnHover: true,
      },
      showFilters: true,
      colDefs: [
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
          cellRenderer: ({ colDef }) => {
            return (
              <DropdownMenu
                items={[
                  {
                    type: 'itemSelectable',
                    label: 'Testing menu',
                    shortcut: "⌘ '",
                    title: 'Testing menu',
                    onChange: () => {
                      console.log(colDef.headerName);
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
          headerName: 'Boolean value',
          preset: 'boolean',
          editable: true,
          cellStyle: {
            width: 4,
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
            width: 5,
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
          cellStyle: {
            width: 5,
          },
        },
        {
          id: 'status',
          headerName: 'Status',
          preset: 'options',
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
          preset: 'options',
          editable: true,
          cellStyle: {
            width: 10,
          },
          cellRendererParams: {
            options: {
              Coworker: { colorScheme: 'success' },
              Developer: { colorScheme: 'data-magenta' },
              Engineer: { colorScheme: 'data-purple' },
              Components: { colorScheme: 'data-blue' },
            },
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
            width: 5,
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
    },
    data: Holo.of()
      .addType('index', (args = {}) => args.index + 1)
      .schema({
        id: 'index',
        menu: 'bool',
        booleanValue: 'bool',
        name: 'name',
        age: 'age',
        company: 'company',
        balance: 'euro',
        status: () =>
          Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
        picture: 'avatar',
        timestamp: 'timestamp',
        tags: () =>
          Holo.chance.pickset(
            ['Coworker', 'Developer', 'Engineer', 'Components'],
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
      .generate(),
  },
};
