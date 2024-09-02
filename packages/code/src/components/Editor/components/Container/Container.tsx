import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { Box, type BoxProps } from '@devoinc/genesys-ui';
import { codeContainerMixin, type ICodeContainerMixin } from './helpers';

export interface ContainerProps
  extends BoxProps,
    Omit<ICodeContainerMixin, 'theme'> {}

export const Container: React.FC<ContainerProps> = ({
  bordered,
  children,
  readOnly,
  styles,
  ...restBoxProps
}) => {
  const theme = useTheme();
  return (
    <Box
      {...restBoxProps}
      styles={concat(codeContainerMixin({ bordered, readOnly, theme }), styles)}
    >
      {children}
    </Box>
  );
};
