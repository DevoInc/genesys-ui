import * as React from 'react';
import { StyledModal } from './StyledModal';
import { render } from 'test-utils';

describe('StyledModal', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledModal />);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        display: inline-flex;
        flex-direction: column;
        overflow: hidden;
    `);
  });
});
