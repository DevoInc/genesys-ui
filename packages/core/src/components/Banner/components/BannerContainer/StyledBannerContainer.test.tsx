import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { StyledBannerContainer } from './StyledBannerContainer';

describe('StyledBanner', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledBannerContainer />);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        position: relative;
        display: flex;
    `);
  });
});
