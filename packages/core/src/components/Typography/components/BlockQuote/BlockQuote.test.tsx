import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { BlockQuote } from './BlockQuote';

describe('components', () => {
  describe('BlockQuote', () => {
    test('render', () => {
      render(<BlockQuote tooltip={'tooltip'}>test</BlockQuote>,);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});