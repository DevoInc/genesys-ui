import type * as monaco from 'monaco-editor-core';

import { registerStyleTokenizer } from './registerStyleTokenizer';
import { registerCompletionProvider } from './registerCompletionProvider';

type Monaco = typeof monaco;

type Register = {
  registerStyleTokenizer: (
    tokenizer:
      | monaco.languages.IMonarchLanguage
      | monaco.Thenable<monaco.languages.IMonarchLanguage>,
  ) => Register;
  registerCompletionProvider: (
    provider: monaco.languages.CompletionItemProvider,
  ) => Register;
};

export const registerLanguage = (
  monaco: Monaco,
  languageID: string,
): Register => {
  if (languageID == '') return;

  if (monaco.languages.getEncodedLanguageId(languageID) == 0) {
    monaco.languages.register({ id: languageID });
  }

  const register: Register = {
    registerStyleTokenizer: (tokenizer) => {
      registerStyleTokenizer(monaco, languageID, tokenizer);
      return register;
    },
    registerCompletionProvider: (provider) => {
      registerCompletionProvider(monaco, languageID, provider);
      return register;
    },
  };

  return register;
};
