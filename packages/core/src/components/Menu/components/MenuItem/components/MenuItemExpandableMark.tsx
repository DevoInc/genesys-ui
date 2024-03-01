import * as React from 'react';

import { Flex } from '../../../../Flex';
import { Icon } from '../../../../Icon';
import { GIAngleRight } from '@devoinc/genesys-icons';

export const MenuItemExpandableMark = () => (
  <Flex as="span" flex="0" marginLeft="auto" paddingLeft="cmp-xs">
    <Icon size="xxs">
      <GIAngleRight />
    </Icon>
  </Flex>
);
