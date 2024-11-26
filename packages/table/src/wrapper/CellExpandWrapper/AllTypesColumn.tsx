import * as React from 'react';
import { TColDef } from '../../../src';
import { ROW_HEIGHT_MD } from '../../../src/constants';

export const AllTypesColumn: TColDef[] = [
  {
    id: 'id',
    preset: 'text',
    headerName: 'ID',
    sortable: true,
  },
  {
    id: 'longText',
    headerName: 'longText',
    preset: 'longText',
    sortable: true,
  },
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
    sortable: true,
    isExpandable: true,
    cellExpand: ({ value }) => {
      return (
        <div style={{ backgroundColor: 'lightgreen', color: 'white' }}>
          {value}
        </div>
      );
    },
  },
  {
    id: 'age',
    headerName: 'Age',
    preset: 'number',
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
  },
  {
    id: 'picture',
    headerName: 'Image (URL)',
    preset: 'link',
    sortable: true,
  },
  {
    id: 'timestamp',
    headerName: 'Date',
    preset: 'date',
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
  },
  {
    id: 'quote',
    headerName: 'Favourite quote',
    preset: 'longText',
    rowHeight: ROW_HEIGHT_MD,
    truncateLine: 1,
    sortable: true,
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
  },
  {
    id: 'secondaryWebsite',
    headerName: 'Secondary Website',
    preset: 'link',
    sortable: true,
  },
];
