import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { IKeyValue } from '../../declarations';
import { KeyValueContext } from '../../context';
import { Flex } from '../../../Flex';

export interface KeyValueContainerProps
  extends IGlobalAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic,
    Pick<IKeyValue, 'format' | 'children' | 'size'> {}

export const KeyValueContainer: React.FC<KeyValueContainerProps> = ({
  as,
  children,
  format = 'base',
  id,
  role,
  size = 'md',
  style,
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
      as={as}
      id={id}
      flexDirection={format === 'column' ? format : undefined}
      alignItems="center"
      gap={format === 'base' || format === 'row' ? 'cmp-xs' : 'cmp-xxs'}
      role={role}
      style={style}
      tooltip={tooltip}
      width="100%"
    >
      <KeyValueContext.Provider value={{ format, iconSize, size }}>
        {children}
      </KeyValueContext.Provider>
    </Flex>
  );
};
