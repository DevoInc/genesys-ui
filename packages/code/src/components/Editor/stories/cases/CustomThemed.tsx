import * as React from 'react';
import { useTheme } from 'styled-components';

import { IconButton } from '@devoinc/genesys-ui';
import { Editor } from '../../Editor';
import { useEditorTheme } from '../../hooks';

export const CustomThemed = () => {
  const theme = useTheme();
  const editorTheme = useEditorTheme(theme);
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
        <IconButton icon="gi-heart_full" />
      </Editor.ActionsContainer>
    </Editor.Container>
  );
};
