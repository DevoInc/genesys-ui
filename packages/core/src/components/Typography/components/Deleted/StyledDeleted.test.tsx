import { describe, test, expect } from 'vitest';
import * as React from 'react';
import { render } from '@test';

import { StyledDeleted } from './StyledDeleted';

describe('components', () => {
  describe('Deleted', () => {
    describe('StyledDeleted', () => {
      test('default styles', () => {
        const { container } = render(<StyledDeleted>{'Hello'}</StyledDeleted>);

        expect(container.getElementsByTagName('del')[0]).toHaveStyle(`
          text-decoration: line-through
        `);
      });
    });
  });
});
