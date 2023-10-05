import * as React from 'react';
import { render } from 'test-utils';
import { ToolbarSeparator } from './ToolbarSeparator';

describe('ToolbarSeparator', () => {
  test('Simple render', () => {
    const { container } = render(<ToolbarSeparator />);
    expect(container.getElementsByTagName('hr')[0]).toBeInTheDocument();
  });
});
