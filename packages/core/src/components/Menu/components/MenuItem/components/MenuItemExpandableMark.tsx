import * as React from 'react';
import { GIAngleRight } from '@devoinc/genesys-icons';

import { Flex } from '../../../../Flex';
import { Icon } from '../../../../Icon';

export const MenuItemExpandableMark = () => (
  <Flex as="span" flex="0" marginLeft="auto" paddingLeft="cmp-xs">
    <Icon size="xxs">
      <GIAngleRight />
    </Icon>
  </Flex>
);
