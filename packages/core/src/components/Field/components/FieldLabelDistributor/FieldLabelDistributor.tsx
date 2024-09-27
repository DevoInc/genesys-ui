import * as React from 'react';

import { FIELD_FLEX_CONFIG } from '../../constants';
import type { IField } from '../../declarations';
import { Flex } from '../../../Flex';

export interface FieldLabelDistributorProps
  extends Pick<IField, 'direction' | 'style'> {
  children: React.ReactNode;
}

export const FieldLabelDistributor: React.FC<FieldLabelDistributorProps> = ({
  children,
  direction = 'column',
  style,
}) => {
  const directionUpper = direction.toUpperCase();
  return (
    <Flex
      alignItems={FIELD_FLEX_CONFIG[directionUpper].AI}
      flexDirection={FIELD_FLEX_CONFIG[directionUpper].FD}
      gap={FIELD_FLEX_CONFIG[directionUpper].GAP}
      justifyContent={FIELD_FLEX_CONFIG[directionUpper].JC}
      style={style}
    >
      {children}
    </Flex>
  );
};
