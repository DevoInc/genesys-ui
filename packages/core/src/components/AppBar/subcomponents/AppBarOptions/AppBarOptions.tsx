import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Flex, HFlex } from '../../..';
import { AppBarDivider } from '..';

export interface AppBarOptionsProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {
  id: string;
  /** Options content */
  children: React.ReactNode;
}

export const AppBarOptions: React.FC<AppBarOptionsProps> = ({
  as,
  children,
  id,
  styles,
}) => {
  return (
    <HFlex
      as={as}
      id={id ? `${id}__user-options` : null}
      alignItems="center"
      marginLeft="auto"
      styles={styles}
    >
      <AppBarDivider id={id} />
      <Flex.Item>{children}</Flex.Item>
    </HFlex>
  );
};
