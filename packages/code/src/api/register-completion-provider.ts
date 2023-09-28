import type * as monaco from 'monaco-editor-core';
import { Monaco } from '../declarations';

export const registerCompletionProvider = (
  monaco: Monaco,
  languageID: string,
  provider: monaco.languages.CompletionItemProvider,
): void => {
  if (languageID == '') return;

  if (monaco.languages.getEncodedLanguageId(languageID) == 0) {
    monaco.languages.register({ id: languageID });
  }

  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.registerCompletionItemProvider(languageID, provider);
  });
};
