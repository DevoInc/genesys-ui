import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledItalic } from './StyledItalic';

describe('components', () => {
  describe('Italic', () => {
    describe('StyledItalic', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledItalic>{'Hello'}</StyledItalic>,
        );

        expect(container.getElementsByTagName('em')[0]).toHaveStyle(`
          font-style: italic;
        `);
      });
    });
  });
});
