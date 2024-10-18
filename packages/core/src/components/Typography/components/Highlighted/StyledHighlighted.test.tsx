import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledHighlighted } from './StyledHighlighted';

describe('components', () => {
  describe('Highlighted', () => {
    describe('StyledHighlighted', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledHighlighted>{'Hello'}</StyledHighlighted>,
        );

        expect(container.getElementsByTagName('mark')[0]).toHaveStyle(`
          color: inherit;
        `);
      });
    });
  });
});
