import { describe, it, expect, afterEach } from 'vitest';
import * as React from 'react';
import { cleanup } from '@testing-library/react';

import { Wrap } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('Wrap', () => {
  it('default render', () => {
    render(<Wrap>test</Wrap>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('css props', () => {
    render(
      <Wrap
        height="30rem"
        overflow="auto"
        hSpacing="cmp-lg"
        vSpacing="cmp-md"
        width="60rem"
      >
        test
      </Wrap>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      display: 'flex',
      'flex-wrap': 'wrap',
      'column-gap': '2.4rem',
      'row-gap': '1.6rem',
      height: '480px',
      overflow: 'auto',
      width: '960px',
    });
  });

  afterEach(() => {
    cleanup();
  });
});
