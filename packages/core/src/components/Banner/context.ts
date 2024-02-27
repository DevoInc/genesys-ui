import * as React from 'react';

import { BannerStatus } from './declarations';

export interface BannerContextProps {
  status: BannerStatus;
}

export const BannerContext = React.createContext<BannerContextProps>({
  status: 'info',
});
