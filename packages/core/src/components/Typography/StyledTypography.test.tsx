import * as React from 'react';
import { StyledParagraph, StyledHeading } from './StyledTypography';
import { render } from 'test-utils';

describe('StyledTypography', () => {
  test('StyledParagraph renders with default styles', () => {
    const { container } = render(<StyledParagraph>{'Hello'}</StyledParagraph>);

    expect(container.getElementsByTagName('p')[0]).toHaveStyle(`
        display: block;
    `);
  });

  test('StyledHeading renders with default styles', () => {
    const { container } = render(<StyledHeading>{'Hello'}</StyledHeading>);

    expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
        display: block;
    `);
  });
});
