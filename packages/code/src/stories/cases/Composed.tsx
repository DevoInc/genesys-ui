import * as React from 'react';
import { useTheme } from 'styled-components';

import { Button } from '@devoinc/genesys-ui';
import { SmartEditor, getTheme } from '../..';

export const Composed = () => {
  const theme = useTheme();
  return (
    <SmartEditor.Container height="300px">
      <SmartEditor.Editor
        theme={getTheme(theme)}
        value="I'm being built from my inner parts"
        bordered={true}
      />
      <SmartEditor.ActionsContainer>
        <Button>Submit</Button>
      </SmartEditor.ActionsContainer>
    </SmartEditor.Container>
  );
};
