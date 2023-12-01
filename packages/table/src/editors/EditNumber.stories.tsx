import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { ColDef } from '../declarations';
import { EditNumber } from '.';
import { Cell } from '../core/Cell';
import { NumberRenderer } from '../renderers';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edit/Number',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const NumberEditor: Story = {
  render: () =>
    (() => {
      const data = Holo.of()
        .schema({
          balance: 'euro',
        })
        .repeat(20)
        .generate();
      const [number, setNumber] = React.useState(data[0].balance);
      const onChange = (newNumber: number) => setNumber(newNumber);

      const columnEditTextNumber: ColDef = {
        id: 'age',
        headerName: 'age',
        CellEditor: () => EditNumber({ value: number, onChange }),
        CellRenderer: NumberRenderer,
        editable: true,
      };
      return (
        <Cell
          cellWidth="20rem"
          columnDef={columnEditTextNumber}
          data={number}
        />
      );
    })(),
};
