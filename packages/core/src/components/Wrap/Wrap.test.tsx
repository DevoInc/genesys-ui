import * as React from 'react';
import { cleanup } from '@testing-library/react';

import { render, screen } from '@test';
import { Wrap } from './Wrap';

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
      height: '30rem',
      overflow: 'auto',
      width: '60rem',
    });
  });

  afterEach(() => {
    cleanup();
  });
});
