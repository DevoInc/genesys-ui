import { useTheme } from 'styled-components';
import { editor } from 'monaco-editor-core';

import { convertRGBAToHexA } from './colorConvertions';

export const useEditorTheme = (): {
  id: string;
  themeData: editor.IStandaloneThemeData;
} => {
  const theme = useTheme();
  return {
    // TODO: id should be more specific when possible.
    id: theme.meta.scheme,
    themeData: {
      base: 'vs',
      inherit: true,
      rules: [
        {
          token: 'boolean',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.boolean.base,
          ),
        },
        {
          token: 'comment',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.comment.base,
          ),
          fontStyle: 'italic underline',
        },
        {
          token: 'default',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.default.base,
          ),
        },
        {
          token: 'delimiter',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.delimiter.base,
          ),
        },
        {
          token: 'digit',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.digit.base,
          ),
        },
        {
          token: 'interpolation',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.interpolation.base,
          ),
        },
        {
          token: 'keyword',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.keyword.base,
          ),
        },
        {
          token: 'operator',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.operator.base,
          ),
        },
        {
          token: 'string',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.string.base,
          ),
        },
        {
          token: 'symbol',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.symbol.base,
          ),
        },
        {
          token: 'time',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.time.base,
          ),
        },
        {
          token: 'value',
          foreground: convertRGBAToHexA(
            theme.cmp.diffEditor.rules.color.text.valueBlock.base,
          ),
        },
      ],
      colors: {
        'editor.background': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.editor,
        ),
        'editor.foreground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editor,
        ),
        'editor.inactiveSelectionBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.inactiveSelection,
        ),
        'editor.lineHighlightBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.lineHighlight,
        ),
        'editor.selectionHighlightBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.selectionHighlight,
        ),
        'editor.selectionBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.selection,
        ),
        'editor.wordHighlightBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.wordHighlight,
        ),
        'editorCursor.foreground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editorCursor,
        ),
        'editorLineNumber.activeForeground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editorLineNumberActive,
        ),
        'editorLineNumber.foreground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editorLineNumber,
        ),
        // From StyledInternalEditor managing line number visibility
        'editorIndentGuide.background': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.editorIndentGuide,
        ),
        'editorIndentGuide.activeBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.editorIndentGuideActive,
        ),
        'editorSuggestWidget.background': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.editorSuggestWidget,
        ),
        'editorSuggestWidget.border': convertRGBAToHexA(
          theme.cmp.diffEditor.color.border.editorSuggestWidget,
        ),
        'editorSuggestWidget.foreground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editorSuggestWidget,
        ),
        'editorSuggestWidget.selectedBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.editorSuggestWidgetSelected,
        ),
        'editorSuggestWidget.highlightForeground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editorSuggestWidgetHighlighted,
        ),
        'editorWhitespace.foreground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.editorWhitespace,
        ),
        'list.hoverBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.listHovered,
        ),
        'list.hoverForeground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.text.listHovered,
        ),
        'minimap.background': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.miniMap,
        ),
        'minimap.selectionHighlight': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.miniMapSelectionHighlighted,
        ),
        'minimapSlider.background': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.miniMapSlider,
        ),
        'minimapSlider.hoverBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.miniMapSliderHovered,
        ),
        'minimapSlider.activeBackground': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.miniMapSliderActive,
        ),
        // Half of the styling is here, half is in StyledInternalEditor
        'editorOverviewRuler.background': convertRGBAToHexA(
          theme.cmp.diffEditor.color.background.editorOverviewRuler,
        ),
      },
    },
  };
};
