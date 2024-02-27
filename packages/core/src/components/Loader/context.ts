import * as React from 'react';

import type { LoaderColorScheme, LoaderSize } from './declarations';

export interface LoaderContextProps {
  colorScheme?: LoaderColorScheme;
  size?: LoaderSize;
}

export const LoaderContext = React.createContext<LoaderContextProps>({});
