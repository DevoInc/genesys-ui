import type * as monaco from 'monaco-editor-core';

export interface Language {
  id: string;
  lang: {
    keywords: string[];
    tokenizer: {
      root: [string | RegExp, { cases: { [key: string]: string } } | string][];
    };
  };
  value: string;
  completionProvider?: monaco.languages.CompletionItemProvider;
}
