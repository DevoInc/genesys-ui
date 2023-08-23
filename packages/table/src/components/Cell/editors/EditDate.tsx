import * as React from 'react';
import { DateTimePicker } from '@devoinc/genesys-ui-datetime';

interface DateCellEditorProps {
  value: string | number | Date;
  onChange?: (newValue: string) => void;
}

export const EditDate: React.FC<DateCellEditorProps> = ({
  value,
  onChange,
}) => (
  <DateTimePicker
    onChange={(event) => onChange?.((event.target as HTMLInputElement).value)}
    onApply={undefined}
    onCancel={undefined}
    value={new Date(value)}
  />
);
