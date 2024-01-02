import * as React from 'react';
import { ColDef } from '../../declarations';
import { StyledSortIndicator } from './StyledSortIndicator';
import { StyledSortIndex } from './StyledSortIndex';
import { Flex } from '@devoinc/genesys-ui';

interface OrderIndicatorProps {
  colDef: ColDef;
}

export const OrderIndicator: React.FC<OrderIndicatorProps> = ({ colDef }) => {
  return (
    <Flex flexDirection="row" gap="cmp-xs" justifyContent={'flex-end'}>
      <StyledSortIndicator sort={colDef.sort} />
      <StyledSortIndex>{colDef.sortIndex}</StyledSortIndex>
    </Flex>
  );
};
