import * as React from 'react';
import { StyledDivider } from './StyledDivider';
import { render } from 'test-utils';

const TEST_ID = 'styled-divider';

describe('StyledDivider', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledDivider data-testid={TEST_ID} />);

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
