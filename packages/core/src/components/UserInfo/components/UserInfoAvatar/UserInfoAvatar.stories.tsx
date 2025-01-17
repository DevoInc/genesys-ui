import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UserInfoAvatar } from './UserInfoAvatar';
import { UserInfo } from '../../UserInfo';
import { VFlex } from '../../../VFlex';

const avatarImage = 'https://i.pravatar.cc/150?img=28';

const meta: Meta<typeof UserInfoAvatar> = {
  title: 'Components/Feedback/UserInfo/Components/UserInfoAvatar',
  component: UserInfoAvatar,
  args: {
    name: 'Angela Channing',
    format: 'base',
  },
  argTypes: {
    subtitle: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserInfoAvatar>;

export const Playground: Story = {};

export const WithSubtitle: Story = {
  tags: ['isHidden'],
  args: {
    subtitle: 'UX-UI designer',
  },
};

export const WithImage: Story = {
  tags: ['isHidden'],
  args: {
    avatar: avatarImage,
  },
};

export const Formats: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <VFlex>
        <UserInfo.Avatar format="base" name={props.name} avatar={avatarImage} />
        <UserInfo.Avatar format="bold" name={props.name} avatar={avatarImage} />
        <UserInfo.Avatar
          format="heading"
          name={props.name}
          avatar={avatarImage}
        />
      </VFlex>
    ))(args),
};

export const AvatarSizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <VFlex>
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="xxxs"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="xxs"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="xs"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="sm"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="md"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="lg"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="xl"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="xxl"
        />
        <UserInfo.Avatar
          name={props.name}
          avatar={avatarImage}
          avatarSize="xxxl"
        />
      </VFlex>
    ))(args),
};

export const AvatarColorSchemes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <VFlex>
        <UserInfo.Avatar name={props.name} avatarColorScheme="info" />
        <UserInfo.Avatar name={props.name} avatarColorScheme="success" />
        <UserInfo.Avatar name={props.name} avatarColorScheme="data-dusk" />
      </VFlex>
    ))(args),
};