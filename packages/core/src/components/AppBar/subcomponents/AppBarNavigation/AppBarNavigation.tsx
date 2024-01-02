import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Flex } from '../../../Flex';

export interface AppBarNavigationProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {
  id: string;
  /** Left content */
  children: React.ReactNode;
}

export const AppBarNavigation: React.FC<AppBarNavigationProps> = ({
  as,
  children,
  id,
  styles,
}) => {
  return (
    <Flex.Item
      as={as}
      id={id ? `${id}__tabs` : null}
      flex="1 0 auto"
      styles={styles}
    >
      {children}
    </Flex.Item>
  );
};
