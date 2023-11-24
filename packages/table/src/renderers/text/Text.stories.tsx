import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Cell } from '../../core/Cell';
import { ColDef } from '../../declarations';
import { TextRenderer } from './Text';
import { dateFormatter, linkFormatter } from '../../valueFormatters';

const data = Holo.of()
  .schema({
    name: 'name',
    picture: 'avatar',
    timestamp: 'timestamp',
  })
  .repeat(1)
  .generate();

const column: ColDef = {
  id: 'name',
  headerName: 'Name',
  CellRenderer: TextRenderer,
};

const columnDate: ColDef = {
  id: 'timestamp',
  headerName: 'timestamp',
  valueFormatter: dateFormatter,
  CellRenderer: TextRenderer,
  context: {
    formatDate: 'dd/MM/yyyy HH:mm:ss',
    tz: 'Europe/Madrid',
    locale: 'es',
  },
};

const columnLink: ColDef = {
  id: 'picture',
  headerName: 'picture',
  type: 'link',
  CellRenderer: TextRenderer,
  valueFormatter: linkFormatter,
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/renderers/Text',
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

export const DateFormat: Story = {
  render: () =>
    (() => {
      return <Cell columnDef={columnDate} data={data[0][columnDate.id]} />;
    })(),
};

export const LinkFormat: Story = {
  render: () =>
    (() => {
      return <Cell columnDef={columnLink} data={data[0][columnLink.id]} />;
    })(),
};
