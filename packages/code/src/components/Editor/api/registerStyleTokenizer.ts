import type * as monaco from 'monaco-editor-core';

type Monaco = typeof monaco;

export const registerStyleTokenizer = (
  monaco: Monaco,
  languageID: string,
  tokenizer:
    | monaco.languages.IMonarchLanguage
    | monaco.Thenable<monaco.languages.IMonarchLanguage>,
): void => {
  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setMonarchTokensProvider(languageID, tokenizer);
  });
};
