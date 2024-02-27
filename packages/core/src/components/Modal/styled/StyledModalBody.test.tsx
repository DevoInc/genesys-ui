import * as React from 'react';

import { render } from '@test';
import { StyledModalBody } from './StyledModalBody';

describe('StyledModalBody', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledModalBody />);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        overflow-y: auto;
        flex: 1 1 auto;
    `);
  });
});
