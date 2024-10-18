import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Highlighted } from './Highlighted';

describe('components', () => {
  describe('Highlighted', () => {
    test('render', () => {
      render(<Highlighted tooltip={'tooltip'}>test</Highlighted>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
