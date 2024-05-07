import { useTheme } from 'styled-components';
import { useEditorTheme } from '../../../Editor';
import { convertRGBAToHexA } from '../../../Editor/hooks/theme/colorConvertions';
import { editor } from 'monaco-editor-core';

export const useDiffEditorTheme = (): {
  id: string;
  themeData: editor.IStandaloneThemeData;
} => {
  const theme = useTheme();
  const editorTheme = useEditorTheme();
  // Merge the editor theme with the diff editor theme.
  return {
    ...editorTheme,
    themeData: {
      ...editorTheme.themeData,
      rules: [...editorTheme.themeData.rules],
      colors: {
        ...editorTheme.themeData.colors,
        'diffEditor.removedTextBackground': convertRGBAToHexA(
          theme.alias.color.background.surface.blend.error.base,
        ),
        'diffEditor.insertedTextBackground': convertRGBAToHexA(
          theme.alias.color.background.surface.blend.success.base,
        ),
      },
    },
  };
};
