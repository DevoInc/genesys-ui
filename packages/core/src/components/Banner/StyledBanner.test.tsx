import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { StyledBanner } from './StyledBanner';

describe('StyledBanner', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledBanner />);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        position: relative;
        display: flex;
    `);
  });
});
