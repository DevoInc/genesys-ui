import * as React from 'react';

import { GIMenuAltVertical } from '@devoinc/genesys-icons';
import { Popover, HFlex, IconButton, Menu } from '@devoinc/genesys-ui';

import { CellRendererProps } from '../declarations';
import { ActionContext } from '../../facade';
import { MenuEntry } from './MenuEntry';

export const ActionRenderer: React.FC<CellRendererProps> = ({
  colDef,
  rowIndex,
}) => {
  const context = colDef?.context as ActionContext;
  const popoverId = `${colDef.id}-actions-menu-${rowIndex}`;
  return (
    <HFlex spacing="cmp-xxs" alignItems="end">
      {(context?.quickActions ?? []).map(({ Icon, onClick }, idx) => (
        <IconButton
          size="xs"
          key={idx}
          colorScheme="quiet"
          onClick={(event: React.MouseEvent) => {
            if (onClick) {
              onClick(rowIndex, event);
            }
          }}
        >
          <Icon size={12} />
        </IconButton>
      ))}
      {context?.actionMenu ? (
        <Popover id={popoverId} placement="bottom-end">
          {({ isOpened, toggle, ref }) => (
            <IconButton
              aria-controls={popoverId}
              aria-haspopup="true"
              aria-label="Open the bulk actions menu"
              aria-expanded={isOpened}
              size={'xs'}
              colorScheme="quiet"
              onClick={toggle}
              ref={ref}
              state={isOpened ? 'expanded' : undefined}
            >
              <GIMenuAltVertical size="12" />
            </IconButton>
          )}
          {({ setOpened }) => (
            <Popover.Panel>
              <Menu>
                {context.actionMenu.map((entry, idx) => {
                  return (
                    <MenuEntry
                      key={idx}
                      entry={entry}
                      level={0}
                      rowIndex={rowIndex}
                      setOpen={setOpened}
                    />
                  );
                })}
              </Menu>
            </Popover.Panel>
          )}
        </Popover>
      ) : null}
    </HFlex>
  );
};
