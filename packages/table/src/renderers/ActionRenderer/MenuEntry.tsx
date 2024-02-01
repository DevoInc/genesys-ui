import * as React from 'react';

import { Popover, Menu } from '@devoinc/genesys-ui';

import { ActionMenuEntry } from '../../facade';

type Props = {
  entry: ActionMenuEntry;
  rowIndex: number;
  level: number;
  setOpen: any;
};

export const MenuEntry: React.FC<Props> = ({ entry, level = 0, rowIndex, setOpen }) => {
  if (entry?.component === 'separator') {
    return <Menu.Separator />;
  } else if (entry?.children) {
    const popoverId = `${rowIndex}-${level}-actions-menu`;
    return (
      <Popover placement="right-start" id={popoverId}>
        {({ toggle, ref, setOpened, isOpened }) => (
          <Menu.Item
            aria-controls={popoverId}
            aria-haspopup="true"
            aria-expanded={isOpened}
            onClick={() => {
              setOpened(true);
            }}
            onMouseLeave={toggle}
            onMouseOver={() => {
              setOpened(true);
            }}
            ref={ref}
            expandable
            state={isOpened ? 'expanded' : undefined}
          >
            {entry?.text}
          </Menu.Item>
        )}
        <Popover.Panel>
          <Menu>
            {(entry?.children ?? []).map((childEntry, index) => {
              return (
                <MenuEntry
                  key={index}
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
  const Icon = entry?.Icon;
  return (
    <Menu.Item
      onClick={(event) => {
        if (entry?.onClick) {
          entry.onClick(rowIndex, event);
        }
        setOpen(false);
      }}
      icon={Icon ? <Icon size={12} /> : null}
    >
      {entry?.text}
    </Menu.Item>
  );
};
