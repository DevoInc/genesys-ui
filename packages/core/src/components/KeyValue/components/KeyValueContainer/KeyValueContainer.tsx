import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IGlobalAttrs } from '../../../../declarations';
import type { IKeyValue } from '../../declarations';
import { KeyValueContext } from '../../context';
import { Flex } from '../../../Flex';

export interface KeyValueContainerProps
  extends IGlobalAttrs,
    Pick<IKeyValue, 'format' | 'children' | 'size'> {}

export const KeyValueContainer: React.FC<KeyValueContainerProps> = ({
  children,
  format = 'base',
  id,
  role,
  size = 'md',
  tooltip,
}) => {
  const cmpTokens = useTheme().cmp.keyValue;
  const textLineHeight = cmpTokens.typo.lineHeight[size];
  const textBlockHeight = `calc(${textLineHeight} * 2)`;
  const iconSize =
    format === 'row'
      ? `calc(${textLineHeight} + 0.4rem)`
      : `calc(${textBlockHeight} - 0.4rem)`;

  return (
    <Flex
      id={id}
      flexDirection={format === 'column' ? format : undefined}
      alignItems="center"
      gap={format === 'base' || format === 'row' ? 'cmp-xs' : 'cmp-xxs'}
      role={role}
      tooltip={tooltip}
      width="100%"
    >
      <KeyValueContext.Provider value={{ format, iconSize, size }}>
        {children}
      </KeyValueContext.Provider>
    </Flex>
  );
};
