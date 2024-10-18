import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledInserted } from './StyledInserted';

describe('components', () => {
  describe('Inserted', () => {
    describe('StyledInserted', () => {
      test('default styles', () => {
        const { container } = render(
          <StyledInserted>{'Hello'}</StyledInserted>,
        );

        expect(container.getElementsByTagName('ins')[0]).toHaveStyle(`
          background: #e1faf2;
          color: inherit;
          text-decoration: none;
        `);
      });
    });
  });
});
