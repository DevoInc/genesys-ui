import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledSrOnly } from './StyledSrOnly';

describe('components', () => {
  describe('SrOnly', () => {
    describe('StyledSrOnly', () => {
      test('default styles', () => {
        const { container } = render(<StyledSrOnly>{'Hello'}</StyledSrOnly>);

        expect(container.getElementsByTagName('div')[0]).toHaveStyle(`
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        `);
      });
    });
  });
});
