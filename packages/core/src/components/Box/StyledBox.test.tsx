import * as React from 'react';
import { render, screen } from 'test-utils';

import { StyledBox } from './StyledBox';

describe('StyledFlex', () => {
  test('render', () => {
    render(<StyledBox>test</StyledBox>);
    expect(screen.getByText('test')).toHaveStyle({
      display: 'block',
    });
  });
});
