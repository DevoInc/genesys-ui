import * as React from 'react';
import { StyledModalBody } from './StyledModalBody';
import { render } from 'test-utils';

describe('StyledModalBody', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledModalBody />);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        overflow-y: auto;
        flex: 1 1 auto;
    `);
  });
});
