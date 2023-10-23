import type { editor } from 'monaco-editor-core';
import type { DefaultTheme } from 'styled-components';

import { convertRGBAToHexA } from './utils';

/*
DOC:
  https://code.visualstudio.com/api/references/theme-color
  https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-exposed-colors
*/

// This theme is defined with colors got in Design System. They have been set
// with hex values because there are no theme for it yet.

export const getTheme = (
  theme: DefaultTheme,
): { id: string; themeData: editor.IStandaloneThemeData } => {
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
            theme.alias.color.text.feedback.dataGreen.base,
          ),
        },
        {
          token: 'comment',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataBronze.base,
          ),
          fontStyle: 'italic underline',
        },
        {
          token: 'default',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataPurple.base,
          ),
        },
        {
          token: 'delimiter',
          foreground: convertRGBAToHexA(theme.alias.color.text.body.strong),
        },
        {
          token: 'digit',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataGreen.base,
          ),
        },
        {
          token: 'interpolation',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataPurple.base,
          ),
        },
        {
          token: 'keyword',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataBlue.base,
          ),
        },
        {
          token: 'operator',
          foreground: convertRGBAToHexA(theme.alias.color.text.body.stronger),
        },
        {
          token: 'string',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataGreen.base,
          ),
        },
        {
          token: 'symbol',
          foreground: convertRGBAToHexA(theme.alias.color.text.body.strong),
        },
        {
          token: 'time',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataMagenta.base,
          ),
        },
        {
          token: 'value',
          foreground: convertRGBAToHexA(
            theme.alias.color.text.feedback.dataGreen.base,
          ),
        },
      ],
      colors: {
        'editor.background': convertRGBAToHexA(
          theme.alias.fields.color.background.base.enabled,
        ),
        'editor.foreground': convertRGBAToHexA(
          theme.alias.color.text.body.stronger,
        ),
        'editor.inactiveSelectionBackground': convertRGBAToHexA(
          theme.alias.color.background.feedback.secondary.weak,
        ),
        'editor.lineHighlightBackground': convertRGBAToHexA(
          theme.alias.color.background.feedback.neutral.weaker,
        ),
        'editor.selectionHighlightBackground': convertRGBAToHexA(
          theme.alias.color.background.feedback.secondary.base,
        ),
        'editor.selectionBackground': convertRGBAToHexA(
          theme.alias.color.background.feedback.secondary.weak,
        ),
        'editor.wordHighlightBackground': convertRGBAToHexA(
          theme.alias.color.background.feedback.secondary.weak,
        ),
        'editorCursor.foreground': convertRGBAToHexA(
          theme.alias.color.text.body.stronger,
        ),
        'editorLineNumber.activeForeground': convertRGBAToHexA(
          theme.alias.color.text.body.stronger,
        ),
        'editorLineNumber.foreground': convertRGBAToHexA(
          theme.alias.color.text.body.weak,
        ),
        // 'editorGutter.background': convertRGBAToHexA(
        //   theme.alias.color.background.feedback.neutral.weak
        // ), // From StyledInternalEditor managing line number visibility
        'editorIndentGuide.background': convertRGBAToHexA(
          theme.alias.color.border.separator.base.weak,
        ),
        'editorIndentGuide.activeBackground': convertRGBAToHexA(
          theme.alias.color.border.separator.base.strongest,
        ),
        'editorSuggestWidget.background': convertRGBAToHexA(
          theme.alias.color.background.surface.base.base,
        ),
        'editorSuggestWidget.border': convertRGBAToHexA(
          theme.alias.color.border.separator.base.weak,
        ),
        'editorSuggestWidget.foreground': convertRGBAToHexA(
          theme.alias.color.text.body.stronger,
        ),
        'editorSuggestWidget.selectedBackground': convertRGBAToHexA(
          theme.alias.color.background.surface.base.activated,
        ),
        'editorSuggestWidget.highlightForeground': convertRGBAToHexA(
          theme.alias.color.text.feedback.secondary.strong,
        ),
        'editorWhitespace.foreground': convertRGBAToHexA(
          theme.alias.color.text.body.base,
        ),
        'list.hoverBackground': convertRGBAToHexA(
          theme.alias.color.background.surface.backdrop.base.hovered,
        ),
        'list.hoverForeground': convertRGBAToHexA(
          theme.alias.color.text.action.neutral.hovered,
        ),
        'minimap.background': convertRGBAToHexA(
          theme.alias.color.background.surface.base.raised,
        ),
        'minimap.selectionHighlight': convertRGBAToHexA(
          theme.alias.color.background.feedback.secondary.base,
        ),
        'minimapSlider.background': convertRGBAToHexA(
          theme.alias.color.background.surface.backdrop.base.weak,
        ),
        'minimapSlider.hoverBackground': convertRGBAToHexA(
          theme.alias.color.background.surface.backdrop.base.base,
        ),
        'minimapSlider.activeBackground': convertRGBAToHexA(
          theme.alias.color.background.surface.backdrop.base.strong,
        ),
        // 'scrollbarSlider.background': convertRGBAToHexA(
        //   theme.alias.scrollbars.thumb.color.backdrop.base
        // ),
        // 'scrollbarSlider.hoverBackground': convertRGBAToHexA(
        //   theme.alias.scrollbars.thumb.color.backdrop.hovered
        // ),
        // 'scrollbarSlider.activeBackground': convertRGBAToHexA(
        //   theme.alias.scrollbars.thumb.color.backdrop.hovered
        // ),

        // Half of the styling is here, half is in StyledInternalEditor
        'editorOverviewRuler.background': convertRGBAToHexA(
          theme.alias.color.background.surface.base.raised,
        ),
      },
    },
  };
};
