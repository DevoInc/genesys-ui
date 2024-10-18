import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledLead } from './StyledLead';

describe('components', () => {
  describe('Lead', () => {
    describe('StyledLead', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledLead>{'Hello'}</StyledLead>,
        );

        expect(container.getElementsByTagName('p')[0]).toHaveStyle(`
          margin-bottom: 0px;
        `);
      });
    });
  });
});
