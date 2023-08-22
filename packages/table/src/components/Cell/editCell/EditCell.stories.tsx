import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CellData, ColDef } from '../declarations';
import { dateFormatter } from '../formatters';
import {
  EditBoolean,
  EditDate,
  EditInput,
  EditNumber,
  EditTags,
  EditTextArea,
} from '.';
import { Cell } from '../Cell';
import { data } from '../../../stories/data';
import { CustomCellEditor } from './CustomCellEditorCase';

const columnEditDate: ColDef = {
  colId: 'timestamp',
  field: 'timestamp',
  headerName: 'timestamp',
  valueFormatter: dateFormatter,
  CellEditor: EditDate,
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
  editable: true,
};

const columnEditText: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  CellEditor: EditInput,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
  editable: true,
};

const columnEditTextNumber: ColDef = {
  colId: 'age',
  field: 'age',
  headerName: 'age',
  CellEditor: EditNumber,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
  editable: true,
};

const columnEditTextArea: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  CellEditor: EditTextArea,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
  editable: true,
};

const columnEditBoolean: ColDef = {
  colId: 'booleanValue',
  field: 'booleanValue',
  headerName: 'booleanValue',
  CellEditor: EditBoolean,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
  editable: true,
};

const columnEditTags: ColDef = {
  colId: 'tags',
  field: 'tags',
  headerName: 'tags',
  CellEditor: EditTags,
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
  editable: true,
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/edit cell',
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

export const UsingACustomCellEditor: Story = {
  render: () =>
    (() => {
      const [text, setText] = React.useState<CellData>('Hola');

      const customEditorDef: ColDef = {
        colId: 'text',
        field: 'text',
        headerName: 'text',
        CellEditor: CustomCellEditor,
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
        onChange: (newValue: CellData) => setText(newValue),
      };

      return <Cell column={customEditorDef} data={text} />;
    })(),
};
