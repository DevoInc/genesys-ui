import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render, screen } from '@test';
import { ToolbarGroup } from './ToolbarGroup';

const CONTENT_STRING = 'This is a test text';
const TEST_ID = 'ToolbarGroup';

describe('ToolbarGroup', () => {
  test('Simple render', () => {
    render(<ToolbarGroup data-testid={TEST_ID}>{CONTENT_STRING}</ToolbarGroup>);
    expect(screen.getAllByTestId(TEST_ID)[0]).toBeInTheDocument();
  });

  test('Component renders with default styles', () => {
    render(<ToolbarGroup data-testid={TEST_ID}>{CONTENT_STRING}</ToolbarGroup>);

    expect(screen.getAllByTestId(TEST_ID)[0]).toHaveStyle(`
        align-items: center;
        align-self: stretch;
        flex: 1 1 auto;
    `);
  });
});
