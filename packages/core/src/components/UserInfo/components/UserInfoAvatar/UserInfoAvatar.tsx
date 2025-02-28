import * as React from 'react';

import type { IUserInfo } from '../../declarations';
import type { IDataAttrs } from '../../../../declarations';
import {
  USER_INFO_SIZE_AVATAR_MAP,
  USER_INFO_SIZE_HEADING_FORMAT_MAP,
  USER_INFO_SIZE_SUBTITLE_FORMAT_MAP,
} from './constants';
import { HFlex } from '../../../HFlex';
import { Avatar } from '../../../Avatar';
import { Typography } from '../../../Typography';
import { VFlex } from '../../../VFlex';
import { subtitleSize } from './utils';
import { evalFormatFN } from './utils/evalFormat';

export interface UserInfoAvatarProps
  extends Pick<
      IUserInfo,
      | 'avatar'
      | 'avatarColorScheme'
      | 'avatarSize'
      | 'format'
      | 'id'
      | 'size'
      | 'subtitle'
      | 'tooltip'
    >,
    IDataAttrs {
  name: IUserInfo['name'];
  initials?: string;
}

export const UserInfoAvatar: React.FC<UserInfoAvatarProps> = ({
  avatar,
  avatarColorScheme,
  avatarSize,
  format = 'base',
  id,
  name,
  size = 'md',
  subtitle,
  tooltip,
  initials,
  ...dataAttrs
}) => {
  const defaultAvatarSize = subtitle
    ? subtitleSize(size)
    : USER_INFO_SIZE_AVATAR_MAP[format][size];
  const evalAvatarSize = avatarSize || defaultAvatarSize;
  const evalSpacing = format === 'heading' ? 'cmp-sm' : 'cmp-xs';
  const evalFormat = evalFormatFN(format, subtitle);
  return (
    <HFlex {...dataAttrs} spacing={evalSpacing} id={id} tooltip={tooltip}>
      <Avatar
        colorScheme={avatarColorScheme}
        imageSrc={avatar}
        name={name}
        size={evalAvatarSize}
        initials={initials}
        tooltip={null}
      />
      <VFlex minWidth="0" width="100%" spacing="0">
        {evalFormat === 'heading' ? (
          <Typography
            format={USER_INFO_SIZE_HEADING_FORMAT_MAP[size]}
            truncateLine={1}
          >
            {name}
          </Typography>
        ) : (
          <Typography
            format={evalFormat === 'bold' ? `action-${size}` : `body-${size}`}
            colorScheme="base"
            truncateLine={1}
          >
            {name}
          </Typography>
        )}
        {subtitle && (
          <Typography
            format={USER_INFO_SIZE_SUBTITLE_FORMAT_MAP[size]}
            colorScheme="weak"
            truncateLine={1}
          >
            {subtitle}
          </Typography>
        )}
      </VFlex>
    </HFlex>
  );
};
