import * as React from 'react';

import type { IAvatar } from '../../declarations';
import { formatInitials, getInitialsFromName } from './helper';

export interface AvatarInitialsProps
  extends Pick<IAvatar, 'initials' | 'name'> {}

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({
  initials,
  name,
}) => (
  <span aria-hidden="true">
    {initials
      ? formatInitials(initials)
      : formatInitials(getInitialsFromName(name))}
  </span>
);
