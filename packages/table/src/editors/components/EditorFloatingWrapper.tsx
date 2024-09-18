import * as React from 'react';
import { Flex } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';

import { getTableZIndexMap } from '../../core/utils';

interface EditorFloatingWrapperProps {
  children: React.ReactNode;
  minWidth?: React.CSSProperties['minWidth'];
}

export const EditorFloatingWrapper: React.FC<EditorFloatingWrapperProps> = ({
  children,
  minWidth = '34rem',
}) => {
  const theme = useTheme();
  return (
    <Flex
      minWidth={minWidth}
      width="100%"
      position="absolute"
      positionTop="0"
      positionLeft="0"
      zIndex={getTableZIndexMap(theme).columnHighlight}
      flex="0 0 auto"
      flexDirection="column"
      alignItems="stretch"
      minHeight="100%"
    >
      {children}
    </Flex>
  );
};
