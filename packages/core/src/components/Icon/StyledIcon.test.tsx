import * as React from 'react';
import { StyledIcon } from './StyledIcon';
import { render } from 'test-utils';

describe('StyledIcon', () => {
  test('Component renders with default styles', () => {
    const { container } = render(<StyledIcon iconId={'gi-hand_finger'} />);

    expect(container.getElementsByTagName('i')[0]).toHaveStyle(`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    `);
  });
});
