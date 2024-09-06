import * as React from 'react';
import mermaid from 'mermaid';
import { useMount } from 'ahooks';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export interface MermaidProps {
  chart: string;
  id: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  useMount(() => {
    mermaid.contentLoaded();
  });

  return <div className="mermaid">{chart}</div>;
};
