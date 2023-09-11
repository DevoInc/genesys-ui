import * as React from 'react';
import { render, screen } from 'test-utils';

import { HFlex } from './HFlex';

describe('HFlex', () => {
  test('render', () => {
    render(<HFlex>test</HFlex>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
