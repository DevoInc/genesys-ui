import * as React from 'react';

import { IconButton } from '@devoinc/genesys-ui';
import { DiffEditor } from '../../DiffEditor';
import { useDiffEditorTheme } from '../../hooks';
import { GIHeartFull } from '@devoinc/genesys-icons';

export const CustomThemed = () => {
  const editorTheme = useDiffEditorTheme();
  const customEditorTheme = {
    ...editorTheme,
    themeData: {
      ...editorTheme.themeData,
      colors: {
        ...editorTheme.themeData.colors,
        'diffEditor.insertedTextBackground': '#ffff0055',
      },
    },
  };

  return (
    <DiffEditor.Container bordered={true}>
      <DiffEditor.Editor
        height="300px"
        bordered={true}
        theme={customEditorTheme}
        originalValue="I'm being built from my inner parts"
        modifiedValue="I'm being built from scratch"
      />
      <DiffEditor.ActionsContainer>
        <IconButton icon={<GIHeartFull />} />
      </DiffEditor.ActionsContainer>
    </DiffEditor.Container>
  );
};
