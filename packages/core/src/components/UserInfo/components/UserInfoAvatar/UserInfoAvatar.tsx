import * as React from 'react';

import type { IUserInfo } from '../../declarations';
import { HFlex } from '../../../HFlex';
import { Avatar } from '../../../Avatar';
import { Typography } from '../../../Typography';
import { VFlex } from '../../../VFlex';
import { IDataAttrs } from '../../../../declarations';

export interface UserInfoAvatarProps
  extends Pick<
      IUserInfo,
      | 'avatar'
      | 'avatarColorScheme'
      | 'avatarSize'
      | 'format'
      | 'id'
      | 'subtitle'
      | 'tooltip'
    >,
    IDataAttrs {
  name: IUserInfo['name'];
}

export const UserInfoAvatar: React.FC<UserInfoAvatarProps> = ({
  avatar,
  avatarColorScheme,
  avatarSize,
  format = 'base',
  id,
  name,
  subtitle,
  tooltip,
  ...dataAttrs
}) => {
  const evalAvatarSize =
    avatarSize || (format === 'heading' ? 'lg' : subtitle ? 'sm' : 'xxs');
  const evalSpacing = format === 'heading' ? 'cmp-sm' : 'cmp-xs';
  const evalFormat = format !== 'base' ? format : subtitle ? 'bold' : 'base';
  return (
    <HFlex {...dataAttrs} spacing={evalSpacing} id={id} tooltip={tooltip}>
      <Avatar
        colorScheme={avatarColorScheme}
        imageSrc={avatar}
        name={name}
        size={evalAvatarSize}
      />
      <VFlex minWidth="0" width="100%" spacing="0">
        {evalFormat === 'heading' ? (
          <Typography.Heading truncateLine={1}>{name}</Typography.Heading>
        ) : (
          <Typography
            format={evalFormat === 'bold' ? 'action-md' : 'body-md'}
            colorScheme={evalFormat === 'bold' ? 'stronger' : 'base'}
            truncateLine={1}
          >
            {name}
          </Typography>
        )}
        {subtitle && (
          <Typography format="body-sm" colorScheme="weak" truncateLine={1}>
            {subtitle}
          </Typography>
        )}
      </VFlex>
    </HFlex>
  );
};
