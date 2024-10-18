import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledSmall } from './StyledSmall';

describe('components', () => {
  describe('Small', () => {
    describe('StyledSmall', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledSmall>{'Hello'}</StyledSmall>,
        );

        expect(container.getElementsByTagName('small')[0]).toHaveStyle(`
          font-size: 12px;
        `);
      });
    });
  });
});
