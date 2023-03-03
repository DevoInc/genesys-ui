import * as React from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { twilight as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export interface CodeProps {
  source: {
    code: string;
    language?: string;
  };
  language?: string;
  bordered?: boolean;
  copyable?: boolean;
}

export const Code: React.FC<CodeProps> = ({ source }) => {
  return (
    <div style={{ margin: '25px 0 40px' }}>
      <SyntaxHighlighter language={source?.language || 'tsx'} style={style}>
        {source?.code}
      </SyntaxHighlighter>
    </div>
  );
};
