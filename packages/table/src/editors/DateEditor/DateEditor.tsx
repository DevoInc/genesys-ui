import * as React from 'react';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';

import { TableContext } from '../../core/Table/context';
import { getEditControlSize } from '../utils';

type DateCellEditorProps = {
  value: unknown;
  onChange?: (newValue: string | number | Date) => void;
};

export const DateEditor: React.FC<DateCellEditorProps> = ({
  value,
  onChange,
}) => {
  const { visualOptions } = React.useContext(TableContext);
  return (
    <DateTimePicker
      size={getEditControlSize(visualOptions)}
      onChange={() => undefined}
      onApply={(newDate: number) => onChange?.(new Date(newDate).toISOString())}
      onCancel={() => undefined}
      value={new Date(value as Date)}
    />
  );
};
