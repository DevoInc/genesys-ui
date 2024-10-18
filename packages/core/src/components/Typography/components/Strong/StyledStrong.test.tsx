import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledStrong } from './StyledStrong';

describe('components', () => {
  describe('Strong', () => {
    describe('StyledStrong', () => {
      test('default styles', () => {
        const { container } = render(<StyledStrong $bolder={false}>{'Hello'}</StyledStrong>);

        expect(container.getElementsByTagName('strong')[0]).toHaveStyle(`
          font-weight: 700;
        `);
      });

      test('with bolder', () => {
        const { container } = render(<StyledStrong $bolder={true}>{'Hello'}</StyledStrong>);

        expect(container.getElementsByTagName('strong')[0]).toHaveStyle(`
          font-weight: 900;
        `);
      });
    });
  });
});
