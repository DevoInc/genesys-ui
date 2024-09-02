import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { ToolbarDivider } from './ToolbarDivider';

describe('ToolbarDivider', () => {
  test('Simple render', () => {
    const { container } = render(<ToolbarDivider />);
    expect(container.getElementsByTagName('hr')[0]).toBeInTheDocument();
  });

  test('Component renders with default styles', () => {
    const { container } = render(<ToolbarDivider />);
    expect(container.getElementsByTagName('hr')[0]).toHaveStyle(`
        height: 32px;
        width: 1.6px;
    `);
  });
});
