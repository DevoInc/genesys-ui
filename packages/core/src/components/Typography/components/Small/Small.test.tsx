import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Small } from './Small';

describe('components', () => {
  describe('Small', () => {
    test('render', () => {
      render(
        <Small tooltip={'tooltip'}>
          test
        </Small>,
      );
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
