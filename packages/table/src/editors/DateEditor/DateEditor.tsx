import * as React from 'react';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';

import { TableContext } from '../../context/TableContext';
import { ROW_HEIGHT_MD } from '../../constants';
import { Dropdown, getPxFromRem } from '@devoinc/genesys-ui';
import { CellEditorProps } from '../declarations';
import { useTheme } from 'styled-components';

export const DateEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
  colDef,
  rowIndex,
}) => {
  const theme = useTheme();
  const { density, rowHeight } = React.useContext(TableContext);
  const dropdownId = `${colDef.id}-date-editor-${rowIndex}`;
  const offsetX = getPxFromRem(theme.cmp.table.cell.space.padding.hor[density]);
  return (
    <Dropdown
      placement="bottom-start"
      appendTo={null}
      id={dropdownId}
      isOpened
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [-offsetX, -rowHeight / 2],
          },
        },
      ]}
    >
      {({ ref }) => <div ref={ref}></div>}
      <Dropdown.Panel width={'auto'}>
        <DateTimePicker
          size={
            density === 'compact' && rowHeight <= ROW_HEIGHT_MD ? 'sm' : 'md'
          }
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            onChange(event.currentTarget.value)
          }
          value={new Date(value as Date)}
        />
      </Dropdown.Panel>
    </Dropdown>
  );
};
