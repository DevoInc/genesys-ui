import * as React from 'react';

import type { TLoaderColorScheme, TLoaderSize } from './declarations';

export interface LoaderContextProps {
  colorScheme?: TLoaderColorScheme;
  size?: TLoaderSize;
}

export const LoaderContext = React.createContext<LoaderContextProps>({});
