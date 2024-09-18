import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppBarDivider } from './AppBarDivider';

describe('components', () => {
  describe('AppBar', () => {
    describe('components', () => {
      describe('AppBarDivider', () => {
        test('render', () => {
          render(<AppBarDivider />);
          expect(screen.getByRole('separator')).toBeInTheDocument();
        });
      });
    });
  });
});
