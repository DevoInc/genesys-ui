import * as React from 'react';

import type { IAvatar } from './declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarContextProps extends Pick<IAvatar, 'size' | 'variant'> {}

export const AvatarContext = React.createContext<AvatarContextProps>({
  size: 'md',
  variant: 'circle',
});
