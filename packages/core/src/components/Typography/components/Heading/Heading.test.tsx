import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Heading } from './Heading';

describe('components', () => {
  describe('Heading', () => {
    test('render', () => {
      render(<Heading tooltip={'tooltip'}>test</Heading>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
