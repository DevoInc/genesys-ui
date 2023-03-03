import * as React from 'react';
import { SyntaxHighlighter } from '@storybook/components';

import { Code } from './code';
export interface ImportInfoProps {
  component: string;
  pkg?: string;
  language?: string;
}

export const ImportInfo: React.FC<ImportInfoProps> = ({
  component,
  pkg = 'ui',
}) => {
  const importStatement = `import { ${component} } from '@devoinc/genesys-${pkg}';`;

  return <Code source={{ code: `${importStatement}` }} />;
};
