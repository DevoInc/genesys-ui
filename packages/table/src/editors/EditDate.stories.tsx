import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { ColDef } from '../declarations';
import { EditDate } from '.';
import { Cell } from '../core/Cell';
import { dateFormatter } from '../valueFormatters/date';
import { TextRenderer } from '../renderers';

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
        cellEditor: () => EditDate({ value: date, onChange }),
        cellRenderer: TextRenderer,
        context: {
          formatDate: 'dd/MM/yyyy HH:mm:ss',
          tz: 'Europe/Madrid',
          locale: 'es',
        },
        editable: true,
      };

      return (
        <Cell height={40} width={60} columnDef={columnEditDate} data={date} />
      );
    })(),
};
