import * as React from 'react';

import { UserInfo, Box, Popover, Panel } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import { TContextOptions } from './declarations';

export const UserRenderer: React.FC<TCellRenderer<string, TContextOptions>> = ({
  colDef,
  value,
}) => {
  const context = colDef?.context ?? {};

  const setOpenedInfo = React.useRef(null);

  return context.email || context.job || context.role ? (
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
              avatar={context.avatar}
              avatarColorScheme={context?.colorScheme || 'info'}
              format="base"
              name={value}
              subtitle={context?.subtitle}
            />
          </Box>
        );
      }}
      <Popover.Panel width="38rem" id="story-popover-panel">
        <Panel.Header bordered>
          <UserInfo.Avatar
            avatar={context.avatar}
            avatarColorScheme={context?.colorScheme || 'info'}
            format="base"
            name={value}
            subtitle={context?.subtitle}
          />
        </Panel.Header>
        <Panel.Body>
          <UserInfo.Details
            email={context.email}
            job={context.job}
            role={context.role}
          />
        </Panel.Body>
      </Popover.Panel>
    </Popover>
  ) : (
    <UserInfo.Avatar
      avatar={context.avatar}
      avatarColorScheme={context?.colorScheme || 'info'}
      format="base"
      name={value}
      subtitle={context?.subtitle}
    />
  );
};
