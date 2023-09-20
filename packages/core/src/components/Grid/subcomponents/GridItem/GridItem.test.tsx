import * as React from 'react';
import { render, screen } from 'test-utils';

import { GridItem } from './GridItem';

describe('GridItem', () => {
  test('render', () => {
    render(<GridItem>test</GridItem>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
