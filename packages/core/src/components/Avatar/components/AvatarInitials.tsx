import * as React from 'react';

import { getAvatarInitials } from '../utils';

export interface AvatarInitialsProps {
  /** If there is no image provided you can use instead one or two characters (as maximum) as a content. */
  initials?: string;
  /** Name of the Avatar used for image alt, default initials, aria-label... etc. */
  name: string;
}

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({
  initials,
  name,
}) => <span aria-hidden="true">{getAvatarInitials({ initials, name })}</span>;
