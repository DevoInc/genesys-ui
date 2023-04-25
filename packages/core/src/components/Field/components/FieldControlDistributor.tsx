import * as React from 'react';
import { FIELD_FLEX_CONFIG } from '../constants';
import {
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
} from '../../../declarations';
import { Flex } from '../../Flex';
import { FieldDirection } from '../declarations';
import { FieldProps } from '../Field';
import { useTheme } from 'styled-components';
import { getControlWidth } from '../../../styled/';

export interface FieldControlDistributorProps
  extends StyledOverloadCssProps,
    Pick<FieldProps, 'hasFloatingHelper' | 'size' | 'labelPosition'> {
  children?: React.ReactNode;
  wide?: FieldProps['hasWideControl'];
  width?: FieldProps['controlWidth'];
}

export const FieldControlDistributor: React.FC<
  FieldControlDistributorProps
> = ({
  children,
  hasFloatingHelper,
  labelPosition,
  size,
  styles,
  wide,
  width,
}) => {
  const theme = useTheme();
  // to get vertically aligned the label with the control block anyway
  const labelLineHeight = theme.alias.typo.lineHeight.body[size];
  const inputWidthEval = getControlWidth({ theme, controlWidth: width });
  return (
    <Flex
      alignItems={hasFloatingHelper ? 'center' : null}
      flex={
        inputWidthEval
          ? `0 1 auto`
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
