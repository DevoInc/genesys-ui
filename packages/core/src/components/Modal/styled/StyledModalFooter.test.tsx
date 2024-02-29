import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { StyledModalFooter } from './StyledModalFooter';

describe('StyledModalFooter', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledModalFooter />);

    expect(container.getElementsByTagName('footer')[0]).toHaveStyle(`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex-shrink: 0;
    `);
  });
});
