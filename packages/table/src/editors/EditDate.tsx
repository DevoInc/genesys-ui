import * as React from 'react';
import { DateTimePicker } from '@devoinc/genesys-ui-datetime';

type DateCellEditorProps = {
  value: string | number | Date;
  onChange?: (newValue: string | number | Date) => void;
};

export const EditDate: React.FC<DateCellEditorProps> = ({
  value,
  onChange,
}) => (
  <DateTimePicker
    onChange={() => undefined}
    onApply={(newDate: number) => onChange?.(new Date(newDate).toISOString())}
    onCancel={() => undefined}
    value={new Date(value)}
  />
);
