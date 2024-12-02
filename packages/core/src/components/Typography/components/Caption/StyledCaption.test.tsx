import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledCaption } from './StyledCaption';

describe('components', () => {
  describe('Caption', () => {
    describe('StyledCaption', () => {
      test('default styles', () => {
        const { container } = render(<StyledCaption>{'Hello'}</StyledCaption>);
      
        expect(container.getElementsByTagName('span')[0]).toHaveStyle(`
          display: inline-block;
          position: relative;
          font-family: "Devo Font", sans-serif;
          font-size: 20.8px;
          line-height: 32px;
          font-weight: 500;
          text-align: left;
          letter-spacing: 0px;
          color: #48545C;
        `);
      });
    });
  });
});
