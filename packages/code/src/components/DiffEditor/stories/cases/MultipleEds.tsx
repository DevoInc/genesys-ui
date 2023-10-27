import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';
import { type DiffEditorProps } from '../../';
import { CustomLang } from './CustomLang';

export const MultipleEds = ({ ...props }: Partial<DiffEditorProps>) => {
  return (
    <Flex width="100%" flexDirection="column" gap="cmp-md">
      <CustomLang {...props} />
      <CustomLang options={{ minimap: { enabled: false } }} {...props} />
      <CustomLang langId="esql" language="esql" {...props} />
      <CustomLang options={{ fontSize: 10 }} {...props} />
    </Flex>
  );
};
