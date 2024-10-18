import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Inserted } from './Inserted';

describe('components', () => {
  describe('Inserted', () => {
    test('render', () => {
      render(<Inserted tooltip={'tooltip'}>test</Inserted>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
