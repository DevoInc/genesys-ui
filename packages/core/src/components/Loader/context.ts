import * as React from 'react';

import { LoaderProps } from './Loader';

export interface LoaderContextProps {
  colorScheme?: LoaderProps['colorScheme'];
  size?: LoaderProps['size'];
}

export const LoaderContext = React.createContext<LoaderContextProps>({});
