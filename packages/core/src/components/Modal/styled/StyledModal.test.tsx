import * as React from 'react';

import { render } from '@test';
import { StyledModal } from './StyledModal';

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
