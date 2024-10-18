import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Italic } from './Italic';

describe('components', () => {
  describe('Italic', () => {
    test('render', () => {
      render(<Italic tooltip={'tooltip'}>test</Italic>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
