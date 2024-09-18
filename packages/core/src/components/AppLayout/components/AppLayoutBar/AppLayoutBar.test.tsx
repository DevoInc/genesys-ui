import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppLayoutBar } from './AppLayoutBar';

describe('components', () => {
  describe('AppLayout', () => {
    describe('components', () => {
      describe('AppLayoutBar', () => {
        test('render', () => {
          render(<AppLayoutBar>test</AppLayoutBar>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
