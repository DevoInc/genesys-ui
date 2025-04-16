import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Box } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('Box', () => {
  test('render', () => {
    render(<Box>test</Box>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
