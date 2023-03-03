import * as React from 'react';

export interface TableContentProps {
  content: { link: string; title: string; show: boolean }[];
}

export const TableContent: React.FC<TableContentProps> = ({
  content = [
    { link: '#overview', title: 'Overview', show: true },
    { link: '#how-to-import', title: 'How to import', show: true },
    { link: '#basic-usage', title: 'Basic usage', show: true },
    { link: '#api', title: 'API', show: true },
    { link: '#related-components', title: 'Related components', show: true },
  ],
}) => {
  const contentList = content.map(
    (item, idx) =>
      item.show && (
        <li key={idx}>
          -{' '}
          <a target='_self' href={item.link}>
            {item.title}
          </a>
        </li>
      )
  );

  return <ul style={{ marginBottom: '40px' }}>{contentList}</ul>;
};
