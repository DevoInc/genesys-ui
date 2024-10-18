import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledList } from './StyledList';

describe('components', () => {
  describe('List', () => {
    describe('StyledList', () => {
      test('default styles', () => {
        const { container } = render(<StyledList>{'Hello'}</StyledList>);

        expect(container.getElementsByTagName('ul')[0]).toHaveStyle(`
          list-style: disc none outside;
        `);
      });
      test('listStyle ordered', () => {
        const { container } = render(
          <StyledList $listStyle={'ordered'}>{'Hello'}</StyledList>,
        );

        expect(container.getElementsByTagName('ul')[0]).toHaveStyle(`
          list-style: decimal none outside;
        `);
      });
      test('listStyle none ', () => {
        const { container } = render(
          <StyledList $listStyle={'none'}>{'Hello'}</StyledList>,
        );

        expect(container.getElementsByTagName('ul')[0]).toHaveStyle(`
          list-style: none;
        `);
      });
    });
  });
});
