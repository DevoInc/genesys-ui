import * as React from 'react';

import type { ITag } from '../Tag';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITagGroupContext
  extends Pick<ITag, 'colorScheme' | 'quiet' | 'size'> {}

export const TagGroupContext = React.createContext<ITagGroupContext>({
  size: 'md',
});
