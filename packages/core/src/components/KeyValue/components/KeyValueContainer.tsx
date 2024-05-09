import * as React from 'react';

import type { IGlobalAttrs } from '../../../declarations';
import type { IKeyValue } from '../declarations';
import { KeyValueContext } from '../context';

import { Flex } from '../../Flex';
import { useTheme } from 'styled-components';

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
  const theme = useTheme();
  const textLineHeight = theme.alias.typo.lineHeight.body[size];
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
