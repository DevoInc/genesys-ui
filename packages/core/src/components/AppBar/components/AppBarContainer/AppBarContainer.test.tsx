import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppBarContainer } from './AppBarContainer';

describe('components', () => {
  describe('AppBar', () => {
    describe('components', () => {
      describe('AppBarContainer', () => {
        test('render', () => {
          render(<AppBarContainer>test</AppBarContainer>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
