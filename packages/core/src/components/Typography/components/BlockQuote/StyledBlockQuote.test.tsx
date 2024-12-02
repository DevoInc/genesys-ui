import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledBlockQuote } from './StyledBlockQuote';

describe('components', () => {
  describe('BlockQuote', () => {
    describe('StyledBlockQuote', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledBlockQuote>{'Hello'}</StyledBlockQuote>,
        );
        expect(container.getElementsByTagName('blockquote')[0]).toHaveStyle(`
            position: relative;
            font-family: "Devo Font", sans-serif;
            font-size: 22.4px;
            line-height: 32px;
            font-weight: 300;
            text-align: left;
            letter-spacing: 0px;
            color: #48545C;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 64px;
        `);
      });
      test('custom size and textAlign', () => {
        const { container } = render(
          <StyledBlockQuote $size="lg" $textAlign="center">
            {'Hello'}
          </StyledBlockQuote>,
        );
        expect(container.getElementsByTagName('blockquote')[0]).toHaveStyle(`
            font-size: 25.6px;
            line-height: 38.4px;
            text-align: center;
        `);
      });
    });
  });
});
