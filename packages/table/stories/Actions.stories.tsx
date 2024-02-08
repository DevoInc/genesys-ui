import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';
import { GIEyeViewFilled, GIPencilEdit } from '@devoinc/genesys-icons';

import { type ActionContext, BasicTable, type Data } from '../src';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Actions',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Base: Story = {
  args: {
    colDefs: [
      {
        id: 'id',
        preset: 'text',
        headerName: 'ID',
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
        id: 'actions',
        preset: 'actions',
        context: {
          quickActions: [
            {
              Icon: <GIEyeViewFilled />,
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Quick action 1 on row ${rowIndex}`);
              },
            },
            {
              Icon: <GIPencilEdit />,
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Quick action 2 on row ${rowIndex}`);
              },
            },
          ],
          actionMenu: [
            {
              text: 'Action 1',
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 1 on row ${rowIndex}`);
              },
            },
            {
              text: 'Action 2',
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 2 on row ${rowIndex}`);
              },
            },
            { component: 'separator' },
            {
              text: 'Action 3',
              onClick: (rowIndex) => {
                // eslint-disable-next-line no-console
                console.log(`Action 3 on row ${rowIndex}`);
              },
            },
          ],
        } as ActionContext,
      },
    ],
    data: Holo.of()
      .addType('index', (args = {}) => args.index + 1)
      .schema({
        id: 'index',
        name: 'name',
        age: 'age',
        company: 'company',
      })
      .repeat(10)
      .generate() as Data,
  },
};
