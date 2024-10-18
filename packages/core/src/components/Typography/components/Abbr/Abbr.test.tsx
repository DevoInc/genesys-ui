import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Abbr } from './Abbr';

describe('components', () => {
  describe('Abbr', () => {
    test('render', () => {
      render(<Abbr tooltip={'tooltip'}>test</Abbr>,);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});