import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex } from '@devoinc/genesys-ui';
import { SmartEditor, SmartEditorProps, getTheme } from '../../';

export const MultipleEds = ({ ...props }: Partial<SmartEditorProps>) => {
  const theme = useTheme();
  return (
    <Flex width="100%" flexDirection="column" gap="cmp-md">
      <SmartEditor theme={getTheme(theme)} {...props} />
      <SmartEditor theme={getTheme(theme)} {...props} />
    </Flex>
  );
};
