import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledCodeBlockWrapper } from './StyledCodeBlockWrapper';

describe('components', () => {
  describe('CodeBlock', () => {
    describe('StyledCodeBlockWrapper', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledCodeBlockWrapper>{'Hello'}</StyledCodeBlockWrapper>,
        );

        expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
          display: block;
          font-family: "Times New Roman";
          font-size: 16px;
          font-weight: normal;
          line-height: normal;
        `);
      });
    });
  });
});
