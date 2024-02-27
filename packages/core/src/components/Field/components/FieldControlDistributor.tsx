import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  ControlWidth,
  FieldSize,
  StyledOverloadCssProps,
} from '../../../declarations';
import { LabelPosition } from '../declarations';
import { getControlWidth } from '../../../styled/';
import { FieldContext } from '../context';
import { Flex } from '../../Flex';

export interface FieldControlDistributorProps extends StyledOverloadCssProps {
  children?: React.ReactNode;
  labelPosition?: LabelPosition;
  size?: FieldSize;
  wide?: boolean;
  width?: ControlWidth;
}

export const FieldControlDistributor: React.FC<
  FieldControlDistributorProps
> = ({ children, labelPosition, size, styles, wide, width }) => {
  const theme = useTheme();
  // to get vertically aligned the label with the control block anyway
  const labelLineHeight = theme.alias.typo.lineHeight.body[size];
  const inputWidthEval = getControlWidth({ theme, controlWidth: width });
  const context = React.useContext(FieldContext);
  const evalLabelPosition = labelPosition || context.labelPosition;
  return (
    <Flex
      alignItems="center"
      flex={
        inputWidthEval
          ? '0 1 auto'
          : !wide ||
              evalLabelPosition === 'between' ||
              evalLabelPosition === 'right'
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
