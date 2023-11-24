import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { ColDef } from '../declarations';
import { EditText, EditTextArea } from '.';
import { Cell } from '../core/Cell';
import { TextRenderer } from '../renderers';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edit/Text',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      const data = Holo.of()
        .schema({
          name: 'name',
        })
        .repeat(1)
        .generate();
      const [text, setText] = React.useState(data[0].name);
      const onChange = (newText: string) => setText(newText);

      const columnEditText: ColDef = {
        id: 'name',
        headerName: 'Name',
        CellRenderer: TextRenderer,
        CellEditor: () => EditText({ value: text, onChange }),
        editable: true,
      };

      return <Cell columnDef={columnEditText} data={text} />;
    })(),
};

export const TextAreaEditor: Story = {
  render: () =>
    (() => {
      const [text, setText] = React.useState(
        `I am ridiculously anti-drug. So anti-drug that I am above 
        suspicion in any way that involves suspicion, or testing of any kind. 
        Mine was green. If you are not this tall, you may not ride the 
        rollercoaster. See you guys tomorrow.`,
      );
      const onChange = (newText: string) => setText(newText);

      const columnEditTextArea: ColDef = {
        id: 'name',
        headerName: 'Name',
        CellEditor: () => EditTextArea({ value: text, onChange }),
        CellRenderer: TextRenderer,
        cellStyle: {
          align: {
            horizontal: 'left',
            vertical: 'center',
          },
          textAlign: 'right',
        },
        editable: true,
      };

      return <Cell columnDef={columnEditTextArea} data={text} />;
    })(),
};
