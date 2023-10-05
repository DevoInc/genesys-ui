import * as React from 'react';
import { render } from 'test-utils';
import { ToolbarSeparator } from './ToolbarSeparator';

describe('ToolbarSeparator', () => {
  test('Simple render', () => {
    const { container } = render(<ToolbarSeparator />);
    expect(container.getElementsByTagName('hr')[0]).toBeInTheDocument();
  });

  test('Component renders with default styles', () => {
    const { container } = render(<ToolbarSeparator />);
    expect(container.getElementsByTagName('hr')[0]).toHaveStyle(`
        height: 2rem;
        width: 0.1rem;
        margin: 0.4rem 0px;
    `);
  });
});
