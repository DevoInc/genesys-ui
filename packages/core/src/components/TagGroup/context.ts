import * as React from 'react';

import type { ITag } from '../Tag';

export interface ITagGroupContext
  extends Pick<ITag, 'colorScheme' | 'quiet' | 'size'> {}

export const TagGroupContext = React.createContext<ITagGroupContext>({
  size: 'md',
});
