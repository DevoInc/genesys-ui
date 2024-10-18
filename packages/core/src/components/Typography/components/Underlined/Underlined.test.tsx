import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Underlined } from './Underlined';

describe('components', () => {
  describe('Sup', () => {
    test('render', () => {
      render(<Underlined tooltip={'tooltip'}>test</Underlined>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
