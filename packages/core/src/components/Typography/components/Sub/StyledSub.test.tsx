import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledSub } from './StyledSub';

describe('components', () => {
  describe('Sub', () => {
    describe('StyledSub', () => {
      test('default styles', () => {
        const { container } = render(<StyledSub>{'Hello'}</StyledSub>);

        expect(container.getElementsByTagName('sub')[0]).toHaveStyle(`
          line-height: 1;
          vertical-align: sub;
          font-size: 11.2px;
        `);
      });
    });
  });
});
