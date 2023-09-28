import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';
import { SmartEditor, SmartEditorProps } from '../../';

export const MultipleEds = ({ ...props }: Partial<SmartEditorProps>) => {
  return (
    <Flex width="100%" flexDirection="column" gap="cmp-md">
      <SmartEditor options={{ readOnly: true }} {...props} />
      <SmartEditor options={{ minimap: { enabled: true } }} {...props} />
    </Flex>
  );
};
