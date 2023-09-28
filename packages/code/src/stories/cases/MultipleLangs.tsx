import * as React from 'react';
import { useTheme } from 'styled-components';

import { Box, ContentSwitcher, Flex } from '@devoinc/genesys-ui';
import {
  type Monaco,
  SmartEditor,
  SmartEditorProps,
  registerCompletionProvider,
  registerStyleTokenizer,
  getTheme,
} from '../../';
import { rawLanguage } from '../../__stories__/rawConfig';
import { dedalLanguage } from '../../__stories__/dedal';

export const MultipleLangs = ({ ...props }: Partial<SmartEditorProps>) => {
  const theme = useTheme();

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
      <SmartEditor
        {...props}
        theme={getTheme(theme)}
        language={language}
        value={dedalLanguage.value.concat(rawLanguage.value)}
        beforeMount={registerLanguageProviders}
      />
    </Flex>
  );
};
