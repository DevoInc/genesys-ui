import * as React from 'react';
import { render, screen } from 'test-utils';

import { Col } from '../Col';

describe('Fluid', () => {
  describe('Col', () => {
    test('render', () => {
      render(<Col>test</Col>);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
