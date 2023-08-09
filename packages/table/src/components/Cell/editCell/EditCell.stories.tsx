import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ColDef } from '../declarations';
import { dateFormatter } from '../formatters';
import { EditDate } from './EditDate';
import { EditInput } from './EditInput';
import { EditInputNumber } from './EditInputNumber';
import { EditTextArea } from './EditTextArea';
import { EditBoolean } from './EditBoolean';
import { EditTags } from './EditTags';
import { EditStatus } from './EditStatus';
import { Cell } from '../Cell';
import { data } from '../../../stories/data';

const columnEditDate: ColDef = {
  colId: 'timestamp',
  field: 'timestamp',
  headerName: 'timestamp',
  type: 'default',
  valueFormatter: dateFormatter,
  cellEditor: EditDate,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
  context: {
    formatDate: 'dd/MM/yyyy HH:mm:ss',
    tz: 'Europe/Madrid',
    locale: 'es',
  },
};

const columnEditText: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  type: 'default',
  cellEditor: EditInput,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const columnEditTextNumber: ColDef = {
  colId: 'age',
  field: 'age',
  headerName: 'age',
  type: 'default',
  cellEditor: EditInputNumber,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const columnEditTextArea: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  type: 'default',
  cellEditor: EditTextArea,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const columnEditBoolean: ColDef = {
  colId: 'booleanValue',
  field: 'booleanValue',
  headerName: 'booleanValue',
  type: 'default',
  cellEditor: EditBoolean,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const columnEditTags: ColDef = {
  colId: 'tags',
  field: 'tags',
  headerName: 'tags',
  type: 'default',
  cellEditor: EditTags,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const columnEditStatus: ColDef = {
  colId: 'tags',
  field: 'tags',
  headerName: 'tags',
  type: 'default',
  cellEditor: EditStatus,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const meta: Meta<typeof Cell> = {
  title: 'Table/Components/Cell/edit cell',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const DateEdit: Story = {
  render: () =>
    (() => {
      return (
        <Cell column={columnEditDate} data={data[0][columnEditDate.field]} />
      );
    })(),
};

export const ColumnEditText: Story = {
  render: () =>
    (() => {
      return (
        <Cell column={columnEditText} data={data[0][columnEditText.field]} />
      );
    })(),
};

export const ColumnEditNumber: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          column={columnEditTextNumber}
          data={data[0][columnEditTextNumber.field]}
        />
      );
    })(),
};

export const ColumnEditTextArea: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          column={columnEditTextArea}
          data={data[0][columnEditTextArea.field]}
        />
      );
    })(),
};

export const ColumnEditBoolean: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          column={columnEditBoolean}
          data={data[0][columnEditBoolean.field]}
        />
      );
    })(),
};

export const ColumnEditTags: Story = {
  render: () =>
    (() => {
      return (
        <Cell column={columnEditTags} data={data[0][columnEditTags.field]} />
      );
    })(),
};

export const ColumnEditStatus: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          column={columnEditStatus}
          data={data[0][columnEditStatus.field]}
        />
      );
    })(),
};
