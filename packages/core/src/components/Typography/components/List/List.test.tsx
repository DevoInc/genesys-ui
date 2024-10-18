import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { List } from './List';

describe('components', () => {
  describe('List', () => {
    test('render', () => {
      render(
        <List tooltip={'tooltip'} listStyle="unordered">
          test
        </List>,
      );
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
