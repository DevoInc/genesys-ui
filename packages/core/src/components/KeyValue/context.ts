import * as React from 'react';

import { IKeyValue } from './declarations';

export interface KeyValueContextProps
  extends Pick<IKeyValue, 'format' | 'iconSize' | 'size'> {}

export const KeyValueContext = React.createContext<KeyValueContextProps>({
  format: 'base',
  size: 'md',
});
