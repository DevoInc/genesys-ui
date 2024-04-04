import * as React from 'react';

import { ITag } from '../Tag';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TagGroupContextProps
  extends Pick<ITag, 'colorScheme' | 'quiet' | 'size'> {}

export const TagGroupContext = React.createContext<TagGroupContextProps>({
  size: 'md',
});
