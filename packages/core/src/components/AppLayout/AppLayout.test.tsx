import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppLayout } from './AppLayout';

describe('components', () => {
  describe('AppLayout', () => {
    test('render', () => {
      render(<AppLayout>test</AppLayout>);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
