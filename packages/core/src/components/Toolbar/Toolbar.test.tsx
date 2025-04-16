import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Toolbar } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

const CONTENT_STRING = 'This is a test text';
const TEST_ID = 'toolbar';

describe('Toolbar', () => {
  test('Simple render', () => {
    render(<Toolbar data-testid={TEST_ID}>{CONTENT_STRING}</Toolbar>);
    expect(screen.getAllByTestId(TEST_ID)[0]).toBeInTheDocument();
  });
});
