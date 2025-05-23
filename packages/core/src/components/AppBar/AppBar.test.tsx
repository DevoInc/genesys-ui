import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { AppBar, Tabs } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('components', () => {
  describe('AppBar', () => {
    test('render', () => {
      render(
        <AppBar
          tabs={
            <Tabs colorScheme="primary">
              <Tabs.List activeTabIndex={0}>
                <Tabs.Item label="Item 1" size="lg" state={'selected'} />
                <Tabs.Item size="lg" label="Item 2" />
                <Tabs.Item size="lg" label="Item 3" />
              </Tabs.List>
            </Tabs>
          }
        >
          test
        </AppBar>,
      );
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 1').parentElement).toHaveAttribute(
        'aria-selected',
        'true',
      );
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });
  });
});
