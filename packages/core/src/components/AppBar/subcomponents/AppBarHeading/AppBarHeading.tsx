import * as React from 'react';

import { Flex, Typography } from '../../..';

export interface AppBarHeadingProps {
  id: string;
  /** Heading content */
  children: React.ReactNode;
}

export const AppBarHeading: React.FC<AppBarHeadingProps> = ({
  id,
  children,
}) => (
  <Flex.Item id={`${id}__heading`}>
    {typeof children === 'string' ? (
      <Typography.Heading colorScheme="weaker" size="overline-md">
        {children}
      </Typography.Heading>
    ) : (
      children
    )}
  </Flex.Item>
);
