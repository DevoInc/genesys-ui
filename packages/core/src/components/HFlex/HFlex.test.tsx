import * as React from 'react';
import { render, screen } from 'test-utils';

import { HFlex } from './HFlex';

describe('HFlex', () => {
  test('default render', () => {
    render(<HFlex>test</HFlex>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('css props', () => {
    render(
      <HFlex spacing="cmp-md" height="30rem" overflow="auto" width="60rem">
        test
      </HFlex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      'align-items': 'center',
      display: 'flex',
      gap: '1.6rem',
      height: '30rem',
      overflow: 'auto',
      width: '60rem',
    });
  });
});
