import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { ListItem } from './ListItem';

describe('components', () => {
  describe('ListItem', () => {
    test('render', () => {
      render(
        <ListItem tooltip={'tooltip'}>
          test
        </ListItem>,
      );
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
