import * as React from 'react';
import { Badge } from '@storybook/components';

export interface ShieldsProps {
  badges: { link: string; title: string }[];
}

export const Shields: React.FC<ShieldsProps> = ({ badges }) => {
  const badgeList = badges.map((badge, idx) => (
    <a
      key={idx}
      target={'_blank'}
      href={badge.link}
      style={{
        textDecoration: 'none',
      }}
    >
      <Badge status='neutral' />
      &nbsp;&nbsp;
    </a>
  ));

  return (
    <div
      style={{
        marginBottom: '40px',
      }}
    >
      {badgeList}
    </div>
  );
};
