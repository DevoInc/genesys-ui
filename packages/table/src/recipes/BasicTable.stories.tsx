import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Dropdown, Menu } from '@devoinc/genesys-ui';
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
    tableOptions: {
      defaultColumnDef: {
        editable: false,
      },
      visualOptions: {
        maxHeight: '80vh',
        minWidth: 1800,
        rowHeight: 'md',
        resizableColumns: true,
        highlightColumnsOnHover: true,
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
              <Dropdown>
                {({ toggle, ref, isOpened }) => (
                  <Button
                    aria-expanded={isOpened}
                    aria-haspopup={true}
                    onClick={toggle}
                    ref={ref}
                  >
                    Actions
                  </Button>
                )}
                <Menu>
                  <Menu.Item
                    label="Option 1"
                    onClick={() => {
                      console.log(params.columnDef.headerName);
                    }}
                  />
                </Menu>
              </Dropdown>
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
          editable: true,
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
          editable: true,
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
            width: 10,
          },
        },
        {
          id: 'timestamp',
          headerName: 'Date',
          type: 'date',
          editable: true,
          cellStyle: {
            width: 10,
          },
        },
        {
          id: 'tags',
          headerName: 'Tags',
          type: 'tags',
          editable: true,
          cellStyle: {
            width: 20,
          },
        },
        {
          id: 'profession',
          headerName: 'Profession',
          type: 'text',
          cellStyle: {
            width: 10,
          },
        },
        {
          id: 'email',
          headerName: 'Email',
          type: 'link',
          cellStyle: {
            width: 10,
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
            width: 10,
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
      .generate(),
  },
};
