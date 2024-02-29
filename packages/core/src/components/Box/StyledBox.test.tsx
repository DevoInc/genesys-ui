import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render, screen } from '@test';
import { StyledBox } from './StyledBox';

describe('StyledBox', () => {
  test('render', () => {
    render(<StyledBox>test</StyledBox>);
    expect(screen.getByText('test')).toHaveStyle({
      display: 'block',
    });
  });
});
