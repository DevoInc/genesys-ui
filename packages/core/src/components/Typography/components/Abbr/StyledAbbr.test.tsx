import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledAbbr } from './StyledAbbr';

describe('components', () => {
  describe('Abbr', () => {
    describe('StyledAbbr', () => {
      test('default styles', () => {
        const { container } = render(<StyledAbbr>{'Hello'}</StyledAbbr>);
        expect(container.getElementsByTagName('abbr')[0]).toHaveStyle(`
        text-decoration: underline dotted;
        cursor: help;
    `);
      });
    });
  });
});
