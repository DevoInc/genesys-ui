import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { AppLayout } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('components', () => {
  describe('AppLayout', () => {
    test('render', () => {
      render(<AppLayout>test</AppLayout>);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
