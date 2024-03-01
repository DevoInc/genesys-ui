import * as React from 'react';

import { IconButton } from '@devoinc/genesys-ui';
import { Editor } from '../../Editor';
import { useEditorTheme } from '../../hooks';
import { GIHeartFull } from '@devoinc/genesys-icons';

export const CustomThemed = () => {
  const editorTheme = useEditorTheme();
  const customEditorTheme = {
    ...editorTheme,
    themeData: {
      ...editorTheme.themeData,
      colors: {
        ...editorTheme.themeData.colors,
        'editor.background': '#ffff0055',
      },
    },
  };

  return (
    <Editor.Container bordered={true}>
      <Editor.Editor
        height="300px"
        bordered={true}
        theme={customEditorTheme}
        value="I'm being built from my inner parts"
      />
      <Editor.ActionsContainer>
        <IconButton icon={<GIHeartFull />} />
      </Editor.ActionsContainer>
    </Editor.Container>
  );
};
