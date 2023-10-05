import * as React from 'react';
import { StyledDivider } from './StyledDivider';
import { render } from 'test-utils';

describe('StyledDivider', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledDivider />);

    expect(container.getElementsByTagName('hr')[0]).toHaveStyle(`
        position: relative;
        flex-shrink: 0;
        overflow: hidden;
        display: flex;
        border: none;
        width: 100%;
    `);
  });
});
