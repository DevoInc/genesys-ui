import * as React from 'react';

import type { IBanner } from './declarations';

export interface BannerContextProps
  extends Pick<IBanner, 'status' | 'subtle'> {}

export const BannerContext = React.createContext<BannerContextProps>({
  status: 'info',
  subtle: false,
});
