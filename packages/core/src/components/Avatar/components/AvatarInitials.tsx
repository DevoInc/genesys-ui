import * as React from 'react';

import type { IAvatar } from '../declarations';
import { getAvatarInitials } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarInitialsProps
  extends Pick<IAvatar, 'initials' | 'name'> {}

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({
  initials,
  name,
}) => <span aria-hidden="true">{getAvatarInitials({ initials, name })}</span>;
