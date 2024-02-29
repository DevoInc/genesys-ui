import { describe, test, expect, afterEach } from 'vitest';
import * as React from 'react';
import { cleanup } from '@testing-library/react';

import { render, screen } from '@test';
import { Grid } from './Grid';

describe('GridItem', () => {
  test('render', () => {
    render(<Grid>test</Grid>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('tooltip', () => {
    render(<Grid tooltip="title">test</Grid>);
    expect(screen.getByText('test')).toHaveAttribute('title', 'title');
  });

  afterEach(() => {
    cleanup();
  });
});
