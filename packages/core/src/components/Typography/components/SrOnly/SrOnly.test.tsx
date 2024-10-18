import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { SrOnly } from './SrOnly';

describe('components', () => {
  describe('SrOnly', () => {
    test('render', () => {
      render(<SrOnly>test</SrOnly>);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
