import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppBarItem } from './AppBarItem';

describe('components', () => {
  describe('AppBar', () => {
    describe('components', () => {
      describe('AppBarItem', () => {
        test('render', () => {
          render(<AppBarItem>test</AppBarItem>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
