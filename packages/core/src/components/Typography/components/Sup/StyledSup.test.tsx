import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledSup } from './StyledSup';

describe('components', () => {
  describe('Sup', () => {
    describe('StyledSup', () => {
      test('default styles', () => {
        const { container } = render(<StyledSup>{'Hello'}</StyledSup>);

        expect(container.getElementsByTagName('sup')[0]).toHaveStyle(`
          line-height: 1;
          vertical-align: super;
          font-size: 11.2px;
        `);
      });
    });
  });
});
