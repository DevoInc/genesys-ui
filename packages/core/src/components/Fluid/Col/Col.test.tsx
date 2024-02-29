import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render, screen } from '@test';

import { Col } from '../Col';

describe('Fluid', () => {
  describe('Col', () => {
    test('render', () => {
      render(<Col>test</Col>);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
