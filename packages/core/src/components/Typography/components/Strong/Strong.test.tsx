import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Strong } from './Strong';

describe('components', () => {
  describe('Strong', () => {
    test('render', () => {
      render(<Strong tooltip={'tooltip'}>test</Strong>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
