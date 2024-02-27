import * as React from 'react';

import type { ButtonProps } from '../Button';
import type { BaseSize } from '../../declarations/commonProps';

export interface ContentSwitcherContextProps {
  wide?: ButtonProps['wide'];
  size?: BaseSize;
}

export const ContentSwitcherContext =
  React.createContext<ContentSwitcherContextProps>({});
