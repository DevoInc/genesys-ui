import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Lead } from './Lead';

describe('components', () => {
  describe('Lead', () => {
    test('render', () => {
      render(<Lead tooltip={'tooltip'}>test</Lead>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
