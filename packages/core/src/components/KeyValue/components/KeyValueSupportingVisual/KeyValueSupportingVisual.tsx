import * as React from 'react';
import { useTheme } from 'styled-components';

import { IconContext } from '@devoinc/genesys-icons';

import type { IKeyValue } from '../../declarations';
import { KeyValueContext } from '../../context';
import { Flex } from '../../../Flex';

export interface KeyValueSupportingVisualProps
  extends Pick<IKeyValue, 'format' | 'children' | 'iconSize'> {}

export const KeyValueSupportingVisual: React.FC<
  KeyValueSupportingVisualProps
> = ({ children, iconSize }) => {
  const cmpTokens = useTheme().cmp.keyValue.visual;
  const context = React.useContext(KeyValueContext);
  const evalIconSize = iconSize || context.iconSize;

  return (
    <Flex.Item flex="0 0 auto" display="flex">
      <IconContext.Provider
        value={{
          color: cmpTokens.color.text,
          size: evalIconSize,
          style: {
            position: 'relative',
          },
        }}
      >
        {children}
      </IconContext.Provider>
    </Flex.Item>
  );
};
