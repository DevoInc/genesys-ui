import * as React from 'react';

import { BannerProps } from './Banner';

export interface BannerContextProps {
  status: BannerProps['status'];
}

export const BannerContext = React.createContext<BannerContextProps>({
  status: 'info',
});
