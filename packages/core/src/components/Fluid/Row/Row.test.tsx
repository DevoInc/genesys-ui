import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render, screen } from '@test';
import { Row } from './Row';

describe('Fluid', () => {
  describe('Row', () => {
    test('render', () => {
      render(<Row>test</Row>);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
