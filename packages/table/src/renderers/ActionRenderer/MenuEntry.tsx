import * as React from 'react';

import { Dropdown, Menu } from '@devoinc/genesys-ui';

import { ActionMenuEntry } from '../../facade';

type Props = {
  entry: ActionMenuEntry;
  rowIndex: number;
};

export const MenuEntry: React.FC<Props> = ({ entry, rowIndex }) => {
  if (entry?.component === 'separator') {
    return <Menu.Separator />;
  } else if (entry?.children) {
    return (
      <Dropdown placement="right-start" width={'200px'}>
        {({ toggle, ref, setOpened, isOpened }) => (
          <Menu.Item
            onClick={() => {
              setOpened(true);
            }}
            onMouseLeave={toggle}
            onMouseOver={() => {
              setOpened(true);
            }}
            ref={ref}
            expandable
            state={isOpened ? 'expanded' : 'enabled'}
          >
            {entry?.text}
          </Menu.Item>
        )}
        <Menu>
          {(entry?.children ?? []).map((childEntry, index) => (
            <MenuEntry key={index} entry={childEntry} rowIndex={rowIndex} />
          ))}
        </Menu>
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
