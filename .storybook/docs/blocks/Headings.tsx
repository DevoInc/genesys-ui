import * as React from 'react';
import styled from 'styled-components';

const slugify = (str: string) => {
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
};

interface AnchorProps {
  id: string;
  children: string;
}

const AnchorStyles = styled.a.attrs({
  className: 'sbdocs sbdocs-a',
})`
  margin-left: 3px;
  font-size: 10px;
`;

const Anchor: React.FC<AnchorProps> = ({ id, children }) => (
  <AnchorStyles id={`#${id}`} href={`#${id}`} target="_self">
    {children}
  </AnchorStyles>
);

interface HProps {
  children: string;
}

const H1: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h1 id={id} className='sbdocs sbdocs-h1' style={{ marginRight: '5px' }}>
      <Anchor id={id}>{children}</Anchor>
    </h1>
  );
};

const H2: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h2 id={id} className='sbdocs sbdocs-h2'>
      <Anchor id={id}>{children}</Anchor>
    </h2>
  );
};

const H3: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h3 id={id} className='sbdocs sbdocs-h3'>
      <Anchor id={id}>{children}</Anchor>
    </h3>
  );
};

const H4: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h4 id={id} className='sbdocs sbdocs-h4'>
      <Anchor id={id}>{children}</Anchor>
    </h4>
  );
};

const H5: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h5 id={id} className='sbdocs sbdocs-h5'>
      <Anchor id={id}>{children}</Anchor>
    </h5>
  );
};

export const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
};
