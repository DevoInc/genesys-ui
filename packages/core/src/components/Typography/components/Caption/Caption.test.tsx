import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Caption } from './Caption';

describe('components', () => {
  describe('Caption', () => {
    test('render', () => {
      render(<Caption tooltip={'tooltip'}>test</Caption>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
