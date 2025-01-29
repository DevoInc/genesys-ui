import * as React from 'react';

import { UserInfo, Box, Popover, Panel } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import { TContextUser } from './declarations';

export const UserRenderer: React.FC<TCellRenderer<string, TContextUser>> = ({
  colDef,
  value,
}) => {
  const context = colDef?.context ?? {};
  const userInfo = context?.userMapping ?? {};

  const setOpenedInfo = React.useRef(null);

  const user = userInfo[value];
  const name = user?.name || value;

  return user?.email || user?.job || user?.role ? (
    <Popover placement="bottom-start" id="story-userinfo">
      {({ toggle, ref, isOpened, setOpened }) => {
        setOpenedInfo.current = setOpened;
        return (
          <Box
            aria-controls="story-popover-panel"
            onClick={() => setOpenedInfo.current(!isOpened)}
            onMouseOut={toggle}
            onMouseOver={() => setOpenedInfo.current(true)}
            ref={ref}
          >
            <UserInfo.Avatar
              avatar={user?.avatar}
              avatarColorScheme={user?.colorScheme || 'info'}
              avatarSize="xs"
              format="base"
              name={name}
              subtitle={user?.subtitle}
            />
          </Box>
        );
      }}
      <Popover.Panel width="38rem" id="story-popover-panel">
        <Panel.Header bordered>
          <UserInfo.Avatar
            avatar={user?.avatar}
            avatarColorScheme={user?.colorScheme || 'info'}
            avatarSize="xs"
            format="base"
            name={name}
            subtitle={user?.subtitle}
          />
        </Panel.Header>
        <Panel.Body>
          <UserInfo.Details
            email={user?.email}
            job={user?.job}
            role={user?.role}
          />
        </Panel.Body>
      </Popover.Panel>
    </Popover>
  ) : (
    <UserInfo.Avatar
      avatar={user?.avatar}
      avatarColorScheme={user?.colorScheme || 'info'}
      avatarSize="xs"
      format="base"
      name={name}
      subtitle={user?.subtitle}
    />
  );
};
