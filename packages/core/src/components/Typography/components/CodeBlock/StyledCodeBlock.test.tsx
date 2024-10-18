import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledCodeBlock } from './StyledCodeBlock';

describe('components', () => {
  describe('CodeBlock', () => {
    describe('StyledCodeBlock', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledCodeBlock>{'Hello'}</StyledCodeBlock>,
        );

        expect(container.getElementsByTagName('code')[0]).toHaveStyle(`
          position: relative;
          font-family: "Mono Font", monospace;
          font-size: 20.8px;
          line-height: 32px;
          font-weight: 500;
          text-align: left;
          letter-spacing: 0px;
          color: #48545c;
          display: block;
          word-break: break-word;
        `);
      });
    });
  });
});
