import * as React from 'react';

import { GIAngleDown } from '@devoinc/genesys-icons';
import { Dropdown, HFlex, IconButton, Menu } from '@devoinc/genesys-ui';

import { CellRendererProps } from '../declarations';
import { ActionContext } from '../../facade';
import { MenuEntry } from './MenuEntry';

export const ActionRenderer: React.FC<CellRendererProps> = ({
  colDef,
  rowIndex,
}) => {
  const context = colDef?.context as ActionContext;
  return (
    <HFlex spacing="cmp-xxs" alignItems="end">
      {(context?.quickActions ?? []).map(({ Icon, onClick }, idx) => (
        <IconButton
          size="xs"
          key={idx}
          onClick={(event) => {
            if (onClick) {
              onClick(rowIndex, event);
            }
          }}
        >
          <Icon size={12} />
        </IconButton>
      ))}
      {context?.actionMenu ? (
        <Dropdown placement="bottom-end" width={'200px'}>
          {({ toggle, ref }) => (
            <IconButton onClick={toggle} ref={ref} size="xs">
              <GIAngleDown size={12} />
            </IconButton>
          )}
          <Menu>
            {context.actionMenu.map((entry, idx) => (
              <MenuEntry key={idx} entry={entry} rowIndex={rowIndex} />
            ))}
          </Menu>
        </Dropdown>
      ) : null}
    </HFlex>
  );
};
