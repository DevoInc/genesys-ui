import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { GICheckThick } from '@devoinc/genesys-icons';
import { Badge } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('components', () => {
  describe('Badge', () => {
    test('render text', () => {
      render(<Badge text="test" />);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('render default icon', () => {
      render(<Badge icon={<GICheckThick />} />);
      expect(screen.getByLabelText('GICheckThick')).toBeInTheDocument();
    });
  });
});
