import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Flex, Typography } from '../../..';

export interface AppBarHeadingProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {
  id: string;
  /** Heading content */
  children: React.ReactNode;
}

export const AppBarHeading: React.FC<AppBarHeadingProps> = ({
  as,
  children,
  id,
  styles,
}) => (
  <Flex.Item id={id ? `${id}__heading` : null} as={as} styles={styles}>
    {typeof children === 'string' ? (
      <Typography.Heading colorScheme="weak" size="overline-md">
        {children}
      </Typography.Heading>
    ) : (
      children
    )}
  </Flex.Item>
);
