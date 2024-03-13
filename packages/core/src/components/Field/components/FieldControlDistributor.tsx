import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IField } from '../declarations';
import { getControlWidth } from '../../../styled/';

import { Flex } from '../../Flex';

export interface FieldControlDistributorProps
  extends Pick<IField, 'labelPosition' | 'size' | 'styles'> {
  children?: React.ReactNode;
  wide?: IField['hasWideControl'];
  width?: IField['controlWidth'];
}

export const FieldControlDistributor: React.FC<
  FieldControlDistributorProps
> = ({ children, labelPosition, size, styles, wide, width }) => {
  const theme = useTheme();
  // to get vertically aligned the label with the control block anyway
  const labelLineHeight = theme.alias.typo.lineHeight.body[size];
  const inputWidthEval = getControlWidth({ theme, controlWidth: width });
  return (
    <Flex
      alignItems="center"
      flex={
        inputWidthEval
          ? '0 1 auto'
          : !wide || labelPosition === 'between' || labelPosition === 'right'
            ? '0 0 auto'
            : '1 1 auto'
      }
      gap="cmp-xxs"
      minHeight={labelLineHeight}
      styles={styles}
      width={inputWidthEval}
    >
      {children}
    </Flex>
  );
};
