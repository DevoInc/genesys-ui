import * as React from 'react';
import { GIMenuAltVertical } from '@devoinc/genesys-icons';

import { Popover, HFlex, IconButton, Menu } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import type { TActionContext } from '../../facade';
import { MenuEntry } from './MenuEntry';

export const ActionRenderer: React.FC<TCellRenderer> = ({
  colDef,
  rowIndex,
}) => {
  const context = colDef?.context as TActionContext;
  const popoverId = `${colDef.id}-actions-menu-${rowIndex}`;
  const iconButtonSize = 'sm';
  const iconButtonColorScheme = 'quiet';
  return (
    <HFlex spacing="cmp-xxs" alignItems="end">
      {(context?.quickActions ?? []).map(
        ({ badgeText, hasBadge, Icon, onClick, tooltip }, idx) => (
          <IconButton
            aria-label={tooltip}
            badgeText={badgeText}
            hasBadge={hasBadge}
            icon={Icon}
            size={iconButtonSize}
            key={idx}
            colorScheme={iconButtonColorScheme}
            onClick={(event: React.MouseEvent) => {
              if (onClick) {
                onClick(rowIndex, event);
              }
            }}
            tooltip={tooltip}
          />
        ),
      )}
      {context?.actionMenu ? (
        <Popover id={popoverId} placement="bottom-end">
          {({ isOpened, toggle, ref }) => (
            <IconButton
              icon={<GIMenuAltVertical />}
              aria-controls={popoverId}
              aria-haspopup="true"
              aria-label="Open the actions menu"
              aria-expanded={isOpened}
              size={iconButtonSize}
              colorScheme={iconButtonColorScheme}
              onClick={toggle}
              ref={ref}
              state={isOpened ? 'expanded' : undefined}
              tooltip="Open the actions menu"
            />
          )}
          {({ setOpened }) => {
            const menuItemsWithLeftSpace = context.actionMenu.some(
              (x) => 'Icon' in x,
            );
            return (
              <Popover.Panel>
                <Menu>
                  {context.actionMenu.map((entry, idx) => {
                    return (
                      <MenuEntry
                        key={idx}
                        hasExtraLeftSpace={menuItemsWithLeftSpace}
                        entry={entry}
                        level={0}
                        rowIndex={rowIndex}
                        setOpen={setOpened}
                      />
                    );
                  })}
                </Menu>
              </Popover.Panel>
            );
          }}
        </Popover>
      ) : null}
    </HFlex>
  );
};
