import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppBarNavigation } from './AppBarNavigation';

describe('components', () => {
  describe('AppBar', () => {
    describe('components', () => {
      describe('AppBarNavigation', () => {
        test('render', () => {
          render(<AppBarNavigation>test</AppBarNavigation>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
