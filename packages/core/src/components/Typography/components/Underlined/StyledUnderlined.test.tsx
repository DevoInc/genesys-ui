import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledUnderlined } from './StyledUnderlined';

describe('components', () => {
  describe('Underlined', () => {
    describe('StyledUnderlined', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledUnderlined>{'Hello'}</StyledUnderlined>,
        );

        expect(container.getElementsByTagName('u')[0]).toHaveStyle(`
          text-decoration: underline;
        `);
      });
    });
  });
});
