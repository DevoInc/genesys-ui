import * as React from 'react';

import type { TBannerStatus } from './declarations';

export interface BannerContextProps {
  status: TBannerStatus;
}

export const BannerContext = React.createContext<BannerContextProps>({
  status: 'info',
});
