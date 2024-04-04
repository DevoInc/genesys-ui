import * as React from 'react';

import { Popover, Menu } from '@devoinc/genesys-ui';

import { TActionMenuEntry } from '../../facade';

type Props = {
  entry: TActionMenuEntry;
  hasExtraLeftSpace: boolean;
  rowIndex: number;
  level: number;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuEntry: React.FC<Props> = ({
  entry,
  hasExtraLeftSpace,
  level = 0,
  rowIndex,
  setOpen,
}) => {
  if (entry?.component === 'separator') {
    return <Menu.Separator />;
  } else if (entry?.children) {
    const popoverId = `${rowIndex}-${level}-actions-menu`;
    const menuItemsWithLeftSpace = entry.children.some((x) => 'Icon' in x);
    return (
      <Popover placement="right-start" id={popoverId}>
        {({ toggle, ref, isOpened }) => (
          <Menu.Item
            hasExtraLeftSpace={hasExtraLeftSpace}
            aria-controls={popoverId}
            aria-haspopup="true"
            aria-expanded={isOpened}
            icon={entry?.Icon}
            label={entry?.text}
            onClick={toggle}
            ref={ref}
            expandable
            state={isOpened ? 'expanded' : undefined}
          />
        )}
        <Popover.Panel>
          <Menu>
            {(entry?.children ?? []).map((childEntry, index) => {
              return (
                <MenuEntry
                  key={index}
                  hasExtraLeftSpace={menuItemsWithLeftSpace}
                  level={level + 1}
                  entry={childEntry}
                  rowIndex={rowIndex}
                />
              );
            })}
          </Menu>
        </Popover.Panel>
      </Popover>
    );
  }
  return (
    <Menu.Item
      hasExtraLeftSpace={hasExtraLeftSpace}
      onClick={(event: React.MouseEvent) => {
        if (entry?.onClick) {
          entry.onClick(rowIndex, event);
        }
        setOpen(false);
      }}
      icon={entry?.Icon}
      label={entry?.text}
    />
  );
};
