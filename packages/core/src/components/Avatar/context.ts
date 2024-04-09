import * as React from 'react';

import type { AvatarProps } from './Avatar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarContextProps
  extends Pick<AvatarProps, 'size' | 'variant'> {}

export const AvatarContext = React.createContext<AvatarContextProps>({
  size: 'md',
  variant: 'circle',
});
