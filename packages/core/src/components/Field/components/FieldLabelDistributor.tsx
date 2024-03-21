import * as React from 'react';
import { FIELD_FLEX_CONFIG } from '../constants';
import type { IField } from '../declarations';
import { Flex } from '../../Flex';

export interface FieldLabelDistributorProps
  extends Pick<IField, 'direction' | 'styles'> {
  children: React.ReactNode;
}

export const FieldLabelDistributor: React.FC<FieldLabelDistributorProps> = ({
  children,
  direction = 'column',
  styles,
}) => {
  const directionUpper = direction.toUpperCase();
  return (
    <Flex
      alignItems={FIELD_FLEX_CONFIG[directionUpper].AI}
      flexDirection={FIELD_FLEX_CONFIG[directionUpper].FD}
      gap={FIELD_FLEX_CONFIG[directionUpper].GAP}
      justifyContent={FIELD_FLEX_CONFIG[directionUpper].JC}
      styles={styles}
    >
      {children}
    </Flex>
  );
};
