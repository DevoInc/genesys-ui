import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppLayoutContent } from './AppLayoutContent';

describe('components', () => {
  describe('AppLayout', () => {
    describe('components', () => {
      describe('AppLayoutContent', () => {
        test('render', () => {
          render(<AppLayoutContent>test</AppLayoutContent>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
