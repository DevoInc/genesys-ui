import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex } from '@devoinc/genesys-ui';
import { SmartEditor, SmartEditorProps, getTheme } from '../../';

export const MultipleEds = ({ ...props }: Partial<SmartEditorProps>) => {
  const theme = useTheme();
  return (
    <Flex width="100%" flexDirection="column" gap="cmp-md">
      <SmartEditor
        options={{ readOnly: true }}
        theme={getTheme(theme)}
        {...props}
      />
      <SmartEditor
        options={{ minimap: { enabled: true } }}
        theme={getTheme(theme)}
        {...props}
      />
    </Flex>
  );
};
