import * as React from 'react';

import type { IKeyValue } from '../../declarations';
import { KeyValueContext } from '../../context';
import { Flex } from '../../../Flex';

export interface KeyValueTextContainerProps
  extends Pick<IKeyValue, 'format' | 'children' | 'size'> {}

export const KeyValueTextContainer: React.FC<KeyValueTextContainerProps> = ({
  children,
  format,
  size,
}) => {
  const context = React.useContext(KeyValueContext);
  const evalFormat = format || context.format;
  const evalSize = size || context.size;

  return (
    <Flex
      flexDirection={evalFormat === 'row' ? evalFormat : 'column'}
      alignItems={evalFormat !== 'base' ? 'center' : undefined}
      gap={
        evalFormat === 'row' && evalSize !== 'md'
          ? 'cmp-xxs'
          : evalFormat === 'row'
            ? 'cmp-xs'
            : undefined
      }
      minWidth="0"
    >
      {children}
    </Flex>
  );
};
