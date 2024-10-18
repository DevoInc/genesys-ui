import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledCodeInline } from './StyledCodeInline';

describe('components', () => {
  describe('CodeInline', () => {
    describe('StyledCodeInline', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledCodeInline>{'Hello'}</StyledCodeInline>,
        );

        expect(container.getElementsByTagName('code')[0]).toHaveStyle(`
          font-family: "Mono Font", monospace;
          font-size: 16px;
          font-weight: normal;
          line-height: normal;
        `);
      });
    });
  });
});
