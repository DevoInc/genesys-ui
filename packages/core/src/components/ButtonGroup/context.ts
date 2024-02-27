import * as React from 'react';

import { ButtonColorScheme } from '../Button';
import { ButtonGroupSize } from './declarations';

export interface IButtonGroupContext {
  colorScheme?: ButtonColorScheme;
  hasQuietButton?: boolean;
  size: ButtonGroupSize;
}

export const ButtonGroupContext = React.createContext<IButtonGroupContext>({
  size: 'md',
});
