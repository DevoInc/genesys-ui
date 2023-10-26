import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { Box, ContentSwitcher, Flex } from '@devoinc/genesys-ui';
import { DiffEditor, type DiffEditorProps } from '../../';
import { rawLanguage } from '../../../Editor/__stories__/languages/rawConfig';
import { dedalLanguage } from '../../../Editor/__stories__/languages/dedal';
import {
  registerCompletionProvider,
  registerStyleTokenizer,
} from '../../../Editor';

type Monaco = typeof monaco;

export const MultipleLangs = ({ ...props }: Partial<DiffEditorProps>) => {
  const [language, setLanguage] = React.useState<'dedal' | 'rawConfig'>(
    'dedal',
  );

  const registerLanguageProviders = (monaco: Monaco) => {
    // DEDAL
    // Register highlighting
    registerStyleTokenizer(monaco, dedalLanguage.id, dedalLanguage.lang);
    // RAW CONFIG
    // Register highlighting
    registerStyleTokenizer(monaco, rawLanguage.id, rawLanguage.lang);
    // Register autocompletion
    registerCompletionProvider(
      monaco,
      rawLanguage.id,
      rawLanguage.completionProvider,
    );
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
      <DiffEditor
        {...props}
        language={language}
        originalValue={dedalLanguage.value.concat(rawLanguage.value)}
        modifiedValue={dedalLanguage.value
          .concat(rawLanguage.value)
          .replaceAll('Grid', 'Flex')}
        beforeMount={registerLanguageProviders}
      />
    </Flex>
  );
};
