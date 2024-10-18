import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Sup } from './Sup';

describe('components', () => {
  describe('Sup', () => {
    test('render', () => {
      render(<Sup tooltip={'tooltip'}>test</Sup>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
