import * as React from 'react';

import { Dropdown, Menu } from '@devoinc/genesys-ui';

import { ActionMenuEntry } from '../../facade';

type Props = {
  entry: ActionMenuEntry;
  rowIndex: number;
  level: number;
};

export const MenuEntry: React.FC<Props> = ({ entry, level = 0, rowIndex }) => {
  if (entry?.component === 'separator') {
    return <Menu.Separator />;
  } else if (entry?.children) {
    const dropdownId = `${rowIndex}-${level}-actions-menu`;
    return (
      <Dropdown placement="right-start" id={dropdownId}>
        {({ toggle, ref, setOpened, isOpened }) => (
          <Menu.Item
            aria-controls={dropdownId}
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
        <Dropdown.Panel>
          <Menu>
            {(entry?.children ?? []).map((childEntry, index) => (
              <MenuEntry
                key={index}
                level={level + 1}
                entry={childEntry}
                rowIndex={rowIndex}
              />
            ))}
          </Menu>
        </Dropdown.Panel>
      </Dropdown>
    );
  }
  const Icon = entry?.Icon;
  return (
    <Menu.Item
      onClick={(event) => {
        if (entry?.onClick) {
          entry.onClick(rowIndex, event);
        }
      }}
      icon={Icon ? <Icon size={12} /> : null}
    >
      {entry?.text}
    </Menu.Item>
  );
};
