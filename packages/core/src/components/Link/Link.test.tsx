import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Link } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('Link', () => {
  test('render', () => {
    render(<Link underlined>text</Link>);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
