import type { IUseEditor } from './declarations';

export const defaultOptions: IUseEditor['options'] = {
  automaticLayout: true,
  // Fixes Windows cursor problems
  disableMonospaceOptimizations: true,
  // theme.alias.typo.fontSize.mono.md
  fontSize: 13,
  // '//devoLight.alias.typo.fontFamily.mono,
  fontFamily: 'Mono Font, monospace',
  contextmenu: false,
  fixedOverflowWidgets: true,
  folding: false,
  hideCursorInOverviewRuler: true,
  // Line numbers decoration of max 4 digits
  lineNumbersMinChars: 4,
  minimap: {
    enabled: false,
    renderCharacters: false,
  },
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  renderLineHighlight: 'all',
  renderLineHighlightOnlyWhenFocus: true,
  roundedSelection: false,
  scrollbar: {
    alwaysConsumeMouseWheel: false,
    useShadows: false,
  },
  scrollBeyondLastLine: false,
  wordWrap: 'on',
  wordWrapColumn: 80,
  wordBasedSuggestions: 'off',
};
