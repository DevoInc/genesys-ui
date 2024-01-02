import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Button, Dropdown, Menu } from '@devoinc/genesys-ui';

import { BasicTable } from './BasicTable';
import { ROW_HEIGHT_MD } from '../constants';

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
    defaultColDef: {
      editable: false,
    },
    maxHeight: '80vh',
    minWidth: 2800,
    rowHeight: ROW_HEIGHT_MD,
    resizableColumns: true,
    highlightColumnsOnHover: true,
    showFilters: true,
    colDefs: [
      {
        id: 'id',
        preset: 'text',
        headerName: 'ID',
      },
      {
        id: 'menu',
        headerName: 'Menu',
        cellRenderer: ({ colDef }) => {
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
                    console.log(colDef);
                  }}
                />
              </Menu>
            </Dropdown>
          );
        },
      },
      {
        id: 'booleanValue',
        headerName: 'Boolean value',
        preset: 'boolean',
        editable: true,
      },
      {
        id: 'name',
        headerName: 'Name',
        preset: 'text',
        editable: true,
      },
      {
        id: 'age',
        headerName: 'Age',
        preset: 'number',
        editable: true,
      },
      {
        id: 'company',
        headerName: 'Company',
        preset: 'text',
      },
      {
        id: 'balance',
        headerName: 'Balance',
        preset: 'number',
      },
      {
        id: 'status',
        headerName: 'Status',
        preset: 'options',
        editable: true,
      },
      {
        id: 'picture',
        headerName: 'Image (URL)',
        preset: 'link',
      },
      {
        id: 'timestamp',
        headerName: 'Date',
        preset: 'date',
        editable: true,
      },
      {
        id: 'tags',
        headerName: 'Tags',
        preset: 'options',
        editable: true,
        context: {
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
      },
      {
        id: 'email',
        headerName: 'Email',
        preset: 'link',
      },
      {
        id: 'quote',
        headerName: 'Favourite quote',
        preset: 'text',
      },
      {
        id: 'address',
        headerName: 'Address',
        preset: 'text',
      },
      {
        id: 'website',
        headerName: 'Website',
        preset: 'link',
      },
      {
        id: 'secondaryWebsite',
        headerName: 'Secondary Website',
        preset: 'link',
      },
    ],
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
