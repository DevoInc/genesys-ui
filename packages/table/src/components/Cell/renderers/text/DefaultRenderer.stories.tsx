import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cell } from '../../Cell';
import { CellData, ColDef } from '../../declarations';
import { data } from '../../../../stories/data';
import { dateFormatter } from '../../formatters';

const column: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const columnDate: ColDef = {
  colId: 'timestamp',
  field: 'timestamp',
  headerName: 'timestamp',
  valueFormatter: (value: CellData) =>
    dateFormatter(value as string, {
      formatDate: 'dd/MM/yyyy HH:mm:ss',
      tz: 'Europe/Madrid',
      locale: 'es',
    }),
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Base renderers/Text (default)',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return <Cell column={column} data={data[0][column.field]} />;
    })(),
};

export const DateFormat: Story = {
  render: () =>
    (() => {
      return <Cell column={columnDate} data={data[0][columnDate.field]} />;
    })(),
};