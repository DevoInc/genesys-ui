import { UseEditorTheme, useEditorTheme } from '../../../Editor';

export const useDiffEditorTheme: UseEditorTheme = (theme) => {
  // Merge the editor theme with the diff editor theme.
  const editorTheme = useEditorTheme(theme);
  return {
    ...editorTheme,
    themeData: {
      ...editorTheme.themeData,
      rules: [...editorTheme.themeData.rules],
      colors: {
        ...editorTheme.themeData.colors,
        'diffEditor.removedTextBackground':
          theme.alias.color.background.feedback.dataRed.base,
        'diffEditor.insertedTextBackground':
          theme.alias.color.background.feedback.dataGreen.base,
      },
    },
  };
};
