import React from 'react';

import { GIEyeViewFilled, GIPencilEdit } from '@devoinc/genesys-icons';
import { Button, Menu, Popover } from '@devoinc/genesys-ui';

import { TActionContext, TColDef } from '../../../src';
import { ROW_HEIGHT_MD } from '../../../src/constants';
import { richBasicInfoUsers, richExtendedInfoUsers } from '../data/usersData';

export const AllTypesColumn: TColDef[] = [
  {
    id: 'id',
    preset: 'text',
    headerName: 'ID',
    sortable: true,
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
                  //eslint-disable-next-line no-console
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
    sortable: true,
  },
  {
    id: 'name',
    headerName: 'User',
    preset: 'user',
    sortable: true,
    context: {
      userMapping: richBasicInfoUsers,
    },
  },
  {
    id: 'name2',
    headerName: 'User extended',
    preset: 'user',
    sortable: true,
    context: {
      userMapping: richExtendedInfoUsers,
      panelWidth: '10rem',
    },
  },
  {
    id: 'age',
    headerName: 'Age',
    preset: 'number',
    editable: true,
    sortable: true,
  },
  {
    id: 'company',
    headerName: 'Company',
    preset: 'text',
    sortable: true,
  },
  {
    id: 'balance',
    headerName: 'Balance',
    preset: 'number',
    sortable: true,
  },
  {
    id: 'status',
    headerName: 'Status',
    preset: 'options',
    context: {
      options: {
        done: { colorScheme: 'success' },
        test: { colorScheme: 'warning' },
        TODO: { colorScheme: 'data-purple' },
        inProgress: { colorScheme: 'data-blue' },
      },
    },
    sortable: true,
    editable: true,
  },
  {
    id: 'picture',
    headerName: 'Image (URL)',
    preset: 'link',
    sortable: true,
    editable: true,
  },
  {
    id: 'timestamp',
    headerName: 'Date',
    preset: 'date',
    editable: true,
    sortable: true,
  },
  {
    id: 'tags',
    headerName: 'Tags',
    preset: 'options',
    context: {
      options: {
        Coworker: { colorScheme: 'success' },
        Developer: { colorScheme: 'data-magenta' },
        Engineer: { colorScheme: 'data-purple' },
        Components: { colorScheme: 'data-blue' },
      },
    },
    sortable: true,
  },
  {
    id: 'profession',
    headerName: 'Profession',
    preset: 'text',
    sortable: true,
  },
  {
    id: 'email',
    headerName: 'Email',
    preset: 'link',
    sortable: true,
    editable: true,
  },
  {
    id: 'quote',
    headerName: 'Favourite quote',
    preset: 'longText',
    rowHeight: ROW_HEIGHT_MD,
    truncateLine: 1,
    sortable: true,
    editable: true,
  },
  {
    id: 'address',
    headerName: 'Address',
    preset: 'text',
    sortable: true,
  },
  {
    id: 'website',
    headerName: 'Website',
    preset: 'link',
    sortable: true,
    editable: true,
  },
  {
    id: 'secondaryWebsite',
    headerName: 'Secondary Website',
    preset: 'link',
    sortable: true,
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
          tooltip: 'Open this entity',
        },
        {
          Icon: <GIPencilEdit />,
          onClick: (rowIndex) => {
            // eslint-disable-next-line no-console
            console.log(`Action 2 on row ${rowIndex}`);
          },
          tooltip: 'Edit this entity',
        },
      ],
    } as TActionContext,
  },
];
