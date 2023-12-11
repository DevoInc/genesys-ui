import * as React from 'react';
import { Flex } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';
import { getTableZIndexMap } from '../../core/utils';

interface EditorFloatingWrapperProps {
  children: React.ReactNode;
  width: React.CSSProperties['width'];
}

export const EditorFloatingWrapper: React.FC<EditorFloatingWrapperProps> = ({
  children,
  width,
}) => {
  const theme = useTheme();
  return (
    <Flex
      width={width}
      position="absolute"
      positionTop="0"
      positionLeft="0"
      zIndex={getTableZIndexMap(theme).expanded}
      flex="0 0 auto"
      flexDirection="column"
      minHeight="100%"
    >
      {children}
    </Flex>
  );
};
