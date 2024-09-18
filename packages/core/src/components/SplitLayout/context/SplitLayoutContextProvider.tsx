import * as React from 'react';

import { SplitLayoutContext } from './SplitLayoutContext';
import type { TSizes } from '../declarations';

export interface SplitLayoutContextProviderProps {
  children: React.ReactNode;
  initialSizes: TSizes;
  separatorSize: number;
}

export const SplitLayoutContextProvider: React.FC<
  SplitLayoutContextProviderProps
> = ({ children, initialSizes, separatorSize }) => {
  const sizes = initialSizes;
  return (
    <SplitLayoutContext.Provider
      value={{
        initialSizes,
        sizes,
        separatorSize,
      }}
    >
      {children}
    </SplitLayoutContext.Provider>
  );
};
