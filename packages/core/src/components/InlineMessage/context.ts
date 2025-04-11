import * as React from 'react';

import type {
  TInlineMessageColorScheme,
  TInlineMessageSize,
} from './declarations';

export interface InlineMessageContextProps {
  colorScheme: TInlineMessageColorScheme;
  size: TInlineMessageSize;
}

export const InlineMessageContext =
  React.createContext<InlineMessageContextProps>({
    colorScheme: 'help',
    size: 'md',
  });
