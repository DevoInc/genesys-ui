import * as React from 'react';

import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

export interface AppBarHeadingProps {
  id: string;
  title: string;
}

export const AppBarHeading: React.FC<AppBarHeadingProps> = ({ id, title }) => (
  <Flex.Item id={`${id}__heading`} padding="0 cmp-md">
    <Typography.Heading colorScheme="weaker" size="overline-md">
      {title}
    </Typography.Heading>
  </Flex.Item>
);
