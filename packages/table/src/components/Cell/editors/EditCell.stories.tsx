import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CellData, ColDef } from '../declarations';
import { dateFormatter } from '../formatters';
import {
  EditBoolean,
  EditDate,
  EditText,
  EditNumber,
  EditTags,
  EditTextArea,
} from '.';
import { Cell } from '../Cell';
import { data } from '../../../stories/data';
import { CustomCellEditor } from './CustomCellEditorCase';
import { TagProps } from 'packages/core/dist/types/src';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edition cells',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const TextEditor: Story = {
  render: () =>
    (() => {
      const [text, setText] = React.useState('Hello!');
      const onChange = (newText: string) => setText(newText);

      const columnEditText: ColDef = {
        colId: 'name',
        field: 'name',
        headerName: 'Name',
        CellEditor: () => EditText({ value: text, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };

      return <Cell column={columnEditText} data={text} />;
    })(),
};

export const DateEditor: Story = {
  render: () =>
    (() => {
      const [date, setDate] = React.useState(new Date().toISOString());
      const onChange = (newDate: string) => setDate(newDate);

      const columnEditDate: ColDef = {
        colId: 'timestamp',
        field: 'timestamp',
        headerName: 'timestamp',
        valueFormatter: () =>
          dateFormatter(date, {
            formatDate: 'dd/MM/yyyy HH:mm:ss',
            tz: 'Europe/Madrid',
            locale: 'es',
          }),
        CellEditor: () => EditDate({ value: date, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };

      return <Cell column={columnEditDate} data={date} />;
    })(),
};

export const NumberEditor: Story = {
  render: () =>
    (() => {
      const [number, setNumber] = React.useState(10);
      const onChange = (newNumber: number) => setNumber(newNumber);

      const columnEditTextNumber: ColDef = {
        colId: 'age',
        field: 'age',
        headerName: 'age',
        CellEditor: () => EditNumber({ value: number, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };
      return <Cell column={columnEditTextNumber} data={number} />;
    })(),
};

export const TextAreaEditor: Story = {
  render: () =>
    (() => {
      const [text, setText] = React.useState(
        `I am ridiculously anti-drug. So anti-drug that I am above 
        suspicion in any way that involves suspicion, or testing of any kind. 
        Mine was green. If you are not this tall, you may not ride the 
        rollercoaster. See you guys tomorrow.`
      );
      const onChange = (newText: string) => setText(newText);

      const columnEditTextArea: ColDef = {
        colId: 'name',
        field: 'name',
        headerName: 'Name',
        CellEditor: () => EditTextArea({ value: text, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };

      return <Cell column={columnEditTextArea} data={text} />;
    })(),
};

export const BooleanEditor: Story = {
  render: () =>
    (() => {
      const [boolean, setBoolean] = React.useState(false);
      const onChange = (newValue: boolean) => setBoolean(newValue);

      const columnEditBoolean: ColDef = {
        colId: 'booleanValue',
        field: 'booleanValue',
        headerName: 'booleanValue',
        CellEditor: () => EditBoolean({ value: boolean, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };

      return <Cell column={columnEditBoolean} data={boolean} />;
    })(),
};

export const TagsEditor: Story = {
  render: () =>
    (() => {
      const [tags, setTags] = React.useState<TagProps[]>(
        data[0]['tags'] as TagProps[]
      );

      const onChange = (newTags: TagProps[]) => setTags(newTags);

      const columnEditTags: ColDef = {
        colId: 'tags',
        field: 'tags',
        headerName: 'tags',
        type: 'tags',
        CellEditor: () => EditTags({ value: tags, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };
      return <Cell column={columnEditTags} data={tags} />;
    })(),
};

export const UsingACustomCellEditor: Story = {
  render: () =>
    (() => {
      const [text, setText] = React.useState<CellData>('Hola');
      const onChange = (newValue: CellData) => setText(newValue);

      const customEditorDef: ColDef = {
        colId: 'text',
        field: 'text',
        headerName: 'text',
        CellEditor: () => CustomCellEditor({ value: text, onChange }),
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };

      return <Cell column={customEditorDef} data={text} />;
    })(),
};
