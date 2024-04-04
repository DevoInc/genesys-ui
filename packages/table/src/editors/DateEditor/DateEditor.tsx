import * as React from 'react';
import { useTheme } from 'styled-components';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';
import { Popover, getPxFromRem } from '@devoinc/genesys-ui';

import { ROW_HEIGHT_MD } from '../../constants';
import type { TCellEditor } from '../../declarations';
import { TableContext } from '../../context/TableContext';

export const DateEditor: React.FC<TCellEditor> = ({
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
    <Popover
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
      <Popover.Panel width={'auto'}>
        <DateTimePicker
          size={
            density === 'compact' && rowHeight <= ROW_HEIGHT_MD ? 'sm' : 'md'
          }
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            onChange(event.currentTarget.value)
          }
          value={new Date(value as Date)}
        />
      </Popover.Panel>
    </Popover>
  );
};
