import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Sub } from './Sub';

describe('components', () => {
  describe('Sub', () => {
    test('render', () => {
      render(<Sub tooltip={'tooltip'}>test</Sub>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
