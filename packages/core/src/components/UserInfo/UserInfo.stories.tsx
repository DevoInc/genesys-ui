import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GIBusinessBuildingSkyscraperOffice,
  GIIdentityCardPhotoUserProfile,
} from '@devoinc/genesys-icons';

import { UserInfo } from './UserInfo';
import { Panel } from '../Panel';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { Box } from '../Box';

const storyProps = {
  name: 'Angela Channing',
  role: 'Admin',
  email: 'rick.sanchez@devo.com',
  job: 'UX-UI designer',
  avatar: 'https://i.pravatar.cc/150?img=28',
  subtitle: 'UX-UI designer',
  customInfo: [
    {
      supportingVisual: <GIBusinessBuildingSkyscraperOffice />,
      value: 'Three Center Plaza (3CP), Suite 302, Boston, MA 02108',
    },
    {
      supportingVisual: <GIIdentityCardPhotoUserProfile />,
      value: 'ES-KWD-34896',
    },
  ],
};

const meta: Meta<typeof UserInfo> = {
  title: 'Components/Feedback/UserInfo',
  component: UserInfo,
};

export default meta;
type Story = StoryObj<typeof UserInfo>;

export const Playground: Story = {
  render: (args) =>
    ((props) => (
      <UserInfo {...props}>
        <UserInfo.Avatar
          format="heading"
          name={storyProps.name}
          avatar={storyProps.avatar}
          subtitle={storyProps.subtitle}
        />
        <UserInfo.Details
          email={storyProps.email}
          job={storyProps.job}
          role={storyProps.role}
        />
      </UserInfo>
    ))(args),
};

export const Details: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <UserInfo.Details
        {...props}
        email={storyProps.email}
        job={storyProps.job}
        role={storyProps.role}
      />
    ))(args),
};

export const Avatar: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <UserInfo.Avatar
        {...props}
        name={storyProps.name}
        avatar={storyProps.avatar}
      />
    ))(args),
};

export const AsPanel: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Panel {...props}>
        <Panel.Header bordered>
          <UserInfo.Avatar
            format="heading"
            name={storyProps.name}
            avatar={storyProps.avatar}
            subtitle={storyProps.subtitle}
          />
        </Panel.Header>
        <Panel.Body>
          <UserInfo.Details
            email={storyProps.email}
            job={storyProps.job}
            role={storyProps.role}
          />
        </Panel.Body>
        <Panel.Footer
          bordered
          actions={[
            <Button key={1} colorScheme="accent">
              Edit user details
            </Button>,
          ]}
        />
      </Panel>
    ))(args),
};

export const AsPopover: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const setOpenedInfo = React.useRef(null);
      return (
        <Popover placement="bottom-start" id={`story-popover`}>
          {({ toggle, ref, isOpened, setOpened }) => {
            setOpenedInfo.current = setOpened;
            return (
              <Box
                ref={ref}
                onMouseOut={toggle}
                onClick={() => setOpenedInfo.current(!isOpened)}
                onMouseOver={() => setOpenedInfo.current(true)}
                aria-controls="story-popover-panel"
              >
                <UserInfo.Avatar
                  name={storyProps.name}
                  avatar={storyProps.avatar}
                  subtitle={storyProps.subtitle}
                />
              </Box>
            );
          }}
          <Popover.Panel width="38rem" id="story-popover-panel">
            <Panel.Header bordered>
              <UserInfo.Avatar
                format="heading"
                name={storyProps.name}
                avatar={storyProps.avatar}
                subtitle={storyProps.subtitle}
              />
            </Panel.Header>
            <Panel.Body>
              <UserInfo.Details
                email={storyProps.email}
                job={storyProps.job}
                role={storyProps.role}
                customInfo={storyProps.customInfo}
              />
            </Panel.Body>
          </Popover.Panel>
        </Popover>
      );
    })(),
};
