import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledHeading } from './StyledHeading';

describe('components', () => {
  describe('Heading', () => {
    describe('StyledHeading', () => {
      test('default styles', () => {
        const { container } = render(<StyledHeading>{'Hello'}</StyledHeading>);

        expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
          position: relative;
          font-family: "Devo Font", sans-serif;
          font-size: 25.6px;
          line-height: 32px;
          font-weight: 700;
          text-align: left;
          letter-spacing: -0.308px;
          color: #182026;
        `);
      });
    });
  });
});
