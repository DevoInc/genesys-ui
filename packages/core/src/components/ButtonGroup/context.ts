import * as React from 'react';

import type { TButtonColorScheme } from '../Button';
import type { TButtonGroupSize } from './declarations';

export interface IButtonGroupContext {
  colorScheme?: TButtonColorScheme;
  hasQuietButton?: boolean;
  size: TButtonGroupSize;
}

export const ButtonGroupContext = React.createContext<IButtonGroupContext>({
  size: 'md',
});
