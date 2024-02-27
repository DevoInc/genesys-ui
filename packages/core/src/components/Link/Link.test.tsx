import * as React from 'react';

import { render, screen } from '@test';
import { Link } from './Link';

describe('Link', () => {
  test('render', () => {
    render(<Link underlined>text</Link>);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
