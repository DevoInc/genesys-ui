import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledParagraph } from './StyledParagraph';

describe('StyledTypography', () => {
  test('StyledParagraph renders with default styles', () => {
    const { container } = render(<StyledParagraph>{'Hello'}</StyledParagraph>);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        display: block;
    `);
  });
});
