import * as React from 'react';
import { render, screen } from 'test-utils';

import { Box } from './Box';

describe('Box', () => {
  test('render', () => {
    render(<Box>test</Box>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
