import * as React from 'react';
import { StyledModalHeader } from './StyledModalHeader';
import { render } from 'test-utils';

describe('StyledModalHeader', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledModalHeader />);

    expect(container.getElementsByTagName('header')[0]).toHaveStyle(`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        border-bottom: unset;
        background-color: inherit;
    `);
  });
});