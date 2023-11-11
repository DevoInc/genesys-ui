import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ColDef } from '../declarations';
import { EditBoolean } from '.';
import { Cell } from '../core/Cell';
import { TagRenderer } from '../renderers';
import { DEFAULT_VIRTUAL_COLUMN } from '../constants';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edit/Tag',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const BooleanEditor: Story = {
  render: () =>
    (() => {
      const [boolean, setBoolean] = React.useState(false);
      const onChange = (newValue: boolean) => setBoolean(newValue);

      const columnEditBoolean: ColDef = {
        id: 'booleanValue',
        headerName: 'booleanValue',
        CellEditor: () => EditBoolean({ value: boolean, onChange }),
        CellRenderer: TagRenderer,
        tagConfig: {
          true: { color: '#1EC990', text: 'Active' },
          false: { color: '#ED5353', text: 'Inactive' },
        },
        editable: true,
      };

      return (
        <Cell
          columnDef={columnEditBoolean}
          data={boolean}
          virtualColumn={DEFAULT_VIRTUAL_COLUMN}
        />
      );
    })(),
};
