import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';
import { Button, Menu, Popover } from '@devoinc/genesys-ui';
import { GIEyeViewFilled, GIPencilEdit } from '@devoinc/genesys-icons';

import { TActionContext, BasicTable } from '../../src';
import { ROW_HEIGHT_MD } from '../../src/constants';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Basic',
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
    highlightRowOnHover: true,
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
            <Popover id="custom-col-menu">
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
              <Popover.Panel>
                <Menu>
                  <Menu.Item
                    label="Option 1"
                    onClick={() => {
                      // eslint-disable-next-line no-console
                      console.log(colDef);
                    }}
                  />
                </Menu>
              </Popover.Panel>
            </Popover>
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
        context: {
          options: {
            done: { colorScheme: 'success' },
            test: { colorScheme: 'warning' },
            TODO: { colorScheme: 'data-purple' },
            inProgress: { colorScheme: 'data-blue' },
          },
        },
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
      {
        id: 'actions',
        preset: 'actions',
        context: {
          quickActions: [
            {
              Icon: <GIEyeViewFilled />,
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 1 on row ${rowIndex}`);
              },
            },
            {
              Icon: <GIPencilEdit />,
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 2 on row ${rowIndex}`);
              },
            },
          ],
        } as TActionContext,
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
      .repeat(9)
      .generate(),
  },
};

const colDefsLoxcope = Holo.of()
  .addType('index', (args = {}) => String(args.index + 1))
  .schema({
    headerName: 'name',
    preset: () => 'text',
    id: 'index',
  })
  .repeat(10)
  .generate();

const dataLoxcope = Holo.of()
  .schema(
    colDefsLoxcope.reduce((prev, col) => ({ ...prev, [col.id]: 'name' }), {}),
  )
  .repeat(100)
  .generate();

export const Performance: Story = {
  args: {
    maxHeight: '80vh',
    minWidth: 2800,
    rowHeight: ROW_HEIGHT_MD,
    colDefs: colDefsLoxcope,
    data: dataLoxcope,
  },
};
