import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ColDef } from '../declarations';
import { Cell } from '../core/Cell';
import { CustomCellEditor } from './CustomCellEditorCase';
import { TextRenderer } from '../renderers';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edit/Custom',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const UsingACustomCellEditor: Story = {
  render: () =>
    (() => {
      const [text, setText] = React.useState('Hola');
      const onChange = (newValue) => setText(newValue);

      const customEditorDef: ColDef = {
        id: 'text',
        headerName: 'text',
        cellEditor: () => CustomCellEditor({ value: text, onChange }),
        cellRenderer: TextRenderer,
        editable: true,
      };

      return (
        <Cell height={40} width={60} columnDef={customEditorDef} data={text} />
      );
    })(),
};
