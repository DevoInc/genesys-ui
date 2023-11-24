import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Cell } from '../../core/Cell';
import { ColDef } from '../../declarations';
import { NumberRenderer } from './Number';
import { linkFormatter } from '../../valueFormatters';

const data = Holo.of()
  .schema({
    age: 'age',
    balance: 'euro',
  })
  .repeat(20)
  .generate();

const column: ColDef = {
  id: 'age',
  headerName: 'age',
  type: 'number',
  CellRenderer: NumberRenderer,
};

const columnLink: ColDef = {
  id: 'balance',
  headerName: 'balance',
  type: 'link',
  CellRenderer: NumberRenderer,
  valueFormatter: linkFormatter,
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/renderers/Number',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return <Cell columnDef={column} data={data[0][column.id]} />;
    })(),
};

export const NumberLink: Story = {
  render: () =>
    (() => {
      return <Cell columnDef={columnLink} data={data[0][columnLink.id]} />;
    })(),
};
