import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Divider, Flex } from '../../..';

export interface AppBarDividerProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {
  id: string;
}

export const AppBarDivider: React.FC<AppBarDividerProps> = ({
  as,
  id,
  styles,
}) => {
  const appBarDividerTokens = useTheme().cmp.appBar.divider;

  return (
    <Flex.Item id={id ? `${id}__divider` : null} as={as} styles={styles}>
      <Divider
        vertical
        customColor={appBarDividerTokens.color.border}
        height={appBarDividerTokens.size.height}
        margin="0"
      />
    </Flex.Item>
  );
};
