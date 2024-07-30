import * as React from 'react';

import type { IAvatar } from '../../declarations';
import { getAvatarInitials } from '../../utils';

export interface AvatarInitialsProps
  extends Pick<IAvatar, 'initials' | 'name'> {}

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({
  initials,
  name,
}) => <span aria-hidden="true">{getAvatarInitials({ initials, name })}</span>;
