import * as React from 'react';

import { UserInfo, Box, Popover, Panel } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import { TContextOptions } from './declarations';

export const UserRenderer: React.FC<TCellRenderer<string, TContextOptions>> = ({
  colDef,
  value,
}) => {
  const context = colDef?.context ?? {};
  const options = context?.options ?? {};

  const setOpenedInfo = React.useRef(null);

  return options.email || options.job || options.role ? (
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
              avatar={options.avatar}
              avatarColorScheme={options?.colorScheme || 'info'}
              format="base"
              name={value}
              subtitle={options?.subtitle}
            />
          </Box>
        );
      }}
      <Popover.Panel width="38rem" id="story-popover-panel">
        <Panel.Header bordered>
          <UserInfo.Avatar
            avatar={options.avatar}
            avatarColorScheme={options?.colorScheme || 'info'}
            format="base"
            name={value}
            subtitle={options?.subtitle}
          />
        </Panel.Header>
        <Panel.Body>
          <UserInfo.Details
            email={options.email}
            job={options.job}
            role={options.role}
          />
        </Panel.Body>
      </Popover.Panel>
    </Popover>
  ) : (
    <UserInfo.Avatar
      avatar={options.avatar}
      avatarColorScheme={options?.colorScheme || 'info'}
      format="base"
      name={value}
      subtitle={options?.subtitle}
    />
  );
};
