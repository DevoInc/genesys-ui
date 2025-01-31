import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex } from '../../../Flex';
import {
  FloatingHelper,
  type FloatingHelperProps,
} from '../../../FloatingHelper';

export interface FormFloatingHelperProps extends FloatingHelperProps {}

export const FormFloatingHelper: React.FC<FormFloatingHelperProps> = (
  floatingHelperProps,
) => {
  const theme = useTheme();
  const labelLineHeight = theme.cmp.field.labelHelper.size.minHeight.sm;
  return (
    <Flex inline height={labelLineHeight} marginLeft="cmp-xxs">
      <FloatingHelper {...floatingHelperProps} />
    </Flex>
  );
};
