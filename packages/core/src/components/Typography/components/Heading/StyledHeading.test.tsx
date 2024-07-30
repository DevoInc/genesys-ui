import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledHeading } from './StyledHeading';

describe('StyledTypography', () => {
  test('StyledHeading renders with default styles', () => {
    const { container } = render(<StyledHeading>{'Hello'}</StyledHeading>);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        display: block;
    `);
  });
});
