import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IField } from '../../declarations';
import { getControlWidth } from '../../../../styled';
import { Flex } from '../../../Flex';

export interface FieldControlDistributorProps
  extends Pick<IField, 'labelPosition' | 'size' | 'style'> {
  children?: React.ReactNode;
  wide?: IField['hasWideControl'];
  width?: IField['controlWidth'];
}

export const FieldControlDistributor: React.FC<
  FieldControlDistributorProps
> = ({ children, labelPosition, size, style, wide, width }) => {
  const theme = useTheme();
  // to get vertically aligned the label with the control block anyway
  const minHeight = theme.cmp.field.controlDistributor.size.minHeight[size];
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
      minHeight={minHeight}
      style={style}
      width={inputWidthEval}
    >
      {children}
    </Flex>
  );
};
