import * as React from 'react';

import type { ButtonProps } from '../Button';
import type { TBaseSize } from '../../declarations/commonProps';

export interface ContentSwitcherContextProps {
  wide?: ButtonProps['wide'];
  size?: TBaseSize;
}

export const ContentSwitcherContext =
  React.createContext<ContentSwitcherContextProps>({});
