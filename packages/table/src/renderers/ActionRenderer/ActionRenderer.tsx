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
  const dropdownId = `${colDef.id}-actions-menu-${rowIndex}`;
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
        <Dropdown id={dropdownId} placement="bottom-end">
          {({ isOpened, toggle, ref }) => (
            <IconButton
              aria-controls={dropdownId}
              aria-haspopup="true"
              aria-label="Open the bulk actions menu"
              aria-expanded={isOpened}
              size={'xs'}
              onClick={toggle}
              ref={ref}
              state={isOpened ? 'expanded' : undefined}
            >
              <GIAngleDown size="12" />
            </IconButton>
          )}
          <Dropdown.Panel>
            <Menu>
              {context.actionMenu.map((entry, idx) => (
                <MenuEntry
                  key={idx}
                  entry={entry}
                  level={0}
                  rowIndex={rowIndex}
                />
              ))}
            </Menu>
          </Dropdown.Panel>
        </Dropdown>
      ) : null}
    </HFlex>
  );
};
