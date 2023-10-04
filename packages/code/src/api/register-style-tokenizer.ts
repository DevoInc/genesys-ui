import type * as monaco from 'monaco-editor-core';

type Monaco = typeof monaco;

export const registerStyleTokenizer = (
  monaco: Monaco,
  languageID: string,
  tokenizer:
    | monaco.languages.IMonarchLanguage
    | monaco.Thenable<monaco.languages.IMonarchLanguage>,
): void => {
  if (languageID == '') return;

  if (monaco.languages.getEncodedLanguageId(languageID) == 0) {
    monaco.languages.register({ id: languageID });
  }

  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setMonarchTokensProvider(languageID, tokenizer);
  });
};
