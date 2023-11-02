import * as React from 'react';
import { StyledBanner } from './StyledBanner';
import { render } from 'test-utils';

describe('StyledBanner', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledBanner />);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        position: relative;
        display: flex;
    `);
  });
});
