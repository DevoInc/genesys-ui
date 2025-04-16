import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { Tabs } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('components', () => {
  describe('AppBar', () => {
    test('render', () => {
      render(
        <Tabs colorScheme="primary">
          <Tabs.List>
            <Tabs.Item key="0" label="Item 1" size="lg" state={'selected'} />
            <Tabs.Item key="1" size="lg" label="Item 2" />
            <Tabs.Item key="2" size="lg" label="Item 3" />
          </Tabs.List>
        </Tabs>,
      );
      const item1 = screen.getByText('Item 1');
      expect(item1).toBeInTheDocument();
      expect(item1).toHaveAttribute('aria-selected', 'true');
      const item2 = screen.getByText('Item 2');
      expect(item2).toBeInTheDocument();
      expect(item2).toHaveAttribute('aria-selected', 'false');
      const item3 = screen.getByText('Item 3');
      expect(item3).toBeInTheDocument();
      expect(item3).toHaveAttribute('aria-selected', 'false');
    });
  });
});
