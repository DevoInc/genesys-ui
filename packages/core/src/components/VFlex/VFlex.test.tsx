import * as React from 'react';
import { render, screen } from 'test-utils';

import { VFlex } from './VFlex';

describe('VFlex', () => {
  test('default render', () => {
    render(<VFlex>test</VFlex>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('css props', () => {
    render(
      <VFlex spacing="cmp-md" height="30rem" overflow="auto" width="60rem">
        test
      </VFlex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
      gap: '1.6rem',
      height: '30rem',
      overflow: 'auto',
      width: '60rem',
    });
  });
});
