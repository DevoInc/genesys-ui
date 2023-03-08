import * as React from 'react';

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

interface AnchorProps {
  id: string;
  children: string;
}

const Anchor: React.FC<AnchorProps> = ({ id, children }) => (
  <a href={`#${id}`} className='sbdocs sbdocs-a' target={'_self'}>
    {children}
  </a>
);

interface HProps {
  children: string;
}

export const H1: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h1 id={id} className='sbdocs sbdocs-h1'>
      <Anchor id={id}>{children}</Anchor>
    </h1>
  );
};

export const H2: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h2 id={id} className='sbdocs sbdocs-h2'>
      <Anchor id={id}>{children}</Anchor>
    </h2>
  );
};

export const H3: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h3 id={id} className='sbdocs sbdocs-h3'>
      <Anchor id={id}>{children}</Anchor>
    </h3>
  );
};

export const H4: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h4 id={id} className='sbdocs sbdocs-h4'>
      <Anchor id={id}>{children}</Anchor>
    </h4>
  );
};

export const H5: React.FC<HProps> = ({ children }) => {
  const id = slugify(children);
  return (
    <h5 id={id} className='sbdocs sbdocs-h5'>
      <Anchor id={id}>{children}</Anchor>
    </h5>
  );
};
