import * as React from 'react';
import { FIELD_FLEX_CONFIG } from '../constants';
import { StyledOverloadCssProps } from '../../../declarations';
import { FieldDirection } from '../declarations';
import { Flex } from '../../Flex';
import { FieldContext } from '../context';

export interface FieldLabelDistributorProps extends StyledOverloadCssProps {
  children: React.ReactNode;
  /** The direction of the field based in the desired label position: to the left (row), to the top (column... etc.)*/
  direction?: FieldDirection;
}

export const FieldLabelDistributor: React.FC<FieldLabelDistributorProps> = ({
  children,
  direction,
  styles,
}) => {
  const context = React.useContext(FieldContext);
  const evalDirection = direction || context?.direction || 'column';
  const directionUpper = evalDirection.toUpperCase();
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
