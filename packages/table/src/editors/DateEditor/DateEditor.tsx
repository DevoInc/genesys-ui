import * as React from 'react';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';

import { TableContext } from '../../context/TableContext';
import { ROW_HEIGHT_MD } from '../../constants';

type DateCellEditorProps = {
  value: unknown;
  onChange?: (newValue: string | number | Date) => void;
};

export const DateEditor: React.FC<DateCellEditorProps> = ({
  value,
  onChange,
}) => {
  const { density, rowHeight } = React.useContext(TableContext);
  return (
    <DateTimePicker
      size={density === 'compact' && rowHeight <= ROW_HEIGHT_MD ? 'sm' : 'md'}
      onChange={() => undefined}
      onApply={(newDate: number) => onChange?.(new Date(newDate).toISOString())}
      onCancel={() => undefined}
      value={new Date(value as Date)}
    />
  );
};
