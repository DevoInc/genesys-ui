import * as React from 'react';
import { useTheme } from 'styled-components';

import { Box, type BoxProps, mergeStyles } from '@devoinc/genesys-ui';
import { codeContainerMixin, type ICodeContainerMixin } from './helpers';

export interface ContainerProps extends BoxProps {
  bordered?: ICodeContainerMixin['$bordered'];
  readOnly?: ICodeContainerMixin['$readOnly'];
}

export const Container: React.FC<ContainerProps> = ({
  bordered,
  children,
  readOnly,
  style,
  ...restBoxProps
}) => {
  const theme = useTheme();
  return (
    <Box
      {...restBoxProps}
      style={mergeStyles(
        codeContainerMixin({ $bordered: bordered, $readOnly: readOnly, theme }),
        style,
      )}
    >
      {children}
    </Box>
  );
};
