import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { StyledDivider } from './StyledDivider';

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
