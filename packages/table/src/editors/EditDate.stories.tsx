import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { ColDef } from '../declarations';
import { EditDate } from '.';
import { Cell } from '../core/Cell';
import { dateFormatter } from '../valueFormatters/date';
import { TextRenderer } from '../renderers';
import { DEFAULT_VIRTUAL_COLUMN } from '../constants';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Edit/Date',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      const data = Holo.of()
        .schema({
          timestamp: 'timestamp',
        })
        .repeat(1)
        .generate();
      const [date, setDate] = React.useState(data[0].timestamp);
      const onChange = (newDate: number) => setDate(newDate);

      const columnEditDate: ColDef = {
        id: 'timestamp',
        headerName: 'timestamp',
        valueFormatter: dateFormatter,
        CellEditor: () => EditDate({ value: date, onChange }),
        CellRenderer: TextRenderer,
        context: {
          formatDate: 'dd/MM/yyyy HH:mm:ss',
          tz: 'Europe/Madrid',
          locale: 'es',
        },
        editable: true,
      };

      return (
        <Cell
          columnDef={columnEditDate}
          data={date}
          virtualColumn={DEFAULT_VIRTUAL_COLUMN}
        />
      );
    })(),
};
