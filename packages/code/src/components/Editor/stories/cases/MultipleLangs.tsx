import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { Box, ContentSwitcher, Flex } from '@devoinc/genesys-ui';
import { Editor, EditorProps, registerLanguage } from '../../';
import { rawLanguage } from '../../__stories__/languages/rawConfig';
import { dedalLanguage } from '../../__stories__/languages/dedal';

type Monaco = typeof monaco;

export const MultipleLangs = ({ ...props }: Partial<EditorProps>) => {
  const [language, setLanguage] = React.useState<'dedal' | 'rawConfig'>(
    'dedal',
  );

  const registerProviders = (monaco: Monaco) => {
    // DEDAL
    // Register highlighting
    registerLanguage(monaco, dedalLanguage.id).registerStyleTokenizer(
      dedalLanguage.lang,
    );
    // RAW CONFIG
    // Register highlighting and autocompletion
    registerLanguage(monaco, rawLanguage.id)
      .registerStyleTokenizer(rawLanguage.lang)
      .registerCompletionProvider(rawLanguage.completionProvider)
      .registerCompletionProvider({
        provideCompletionItems: (model, position) => {
          const word = model.getWordUntilPosition(position);
          const suggestions = [
            {
              label: 'example suggestion',
              kind: monaco.languages.CompletionItemKind.Field,
              insertText: 'example suggestion effective',
              range: {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
              },
            },
          ];

          return { suggestions: suggestions };
        },
      });
  };

  return (
    <Flex width="100%" flexDirection="column" gap="cmp-md">
      <Box>
        <ContentSwitcher.Container size="md">
          <ContentSwitcher.Item
            id="dedal"
            onChange={() => setLanguage('dedal')}
            state={language === 'dedal' ? 'selected' : 'enabled'}
          >
            Dedal
          </ContentSwitcher.Item>
          <ContentSwitcher.Item
            id="rawConfig"
            onChange={() => setLanguage('rawConfig')}
            state={language === 'rawConfig' ? 'selected' : 'enabled'}
          >
            RawConfig
          </ContentSwitcher.Item>
        </ContentSwitcher.Container>
      </Box>
      <Editor
        {...props}
        language={language}
        value={dedalLanguage.value.concat(rawLanguage.value)}
        beforeMount={registerProviders}
      />
    </Flex>
  );
};
