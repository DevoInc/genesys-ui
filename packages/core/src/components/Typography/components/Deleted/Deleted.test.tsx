import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Deleted } from './Deleted';

describe('components', () => {
  describe('Deleted', () => {
    test('render', () => {
      render(<Deleted tooltip={'tooltip'}>test</Deleted>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
