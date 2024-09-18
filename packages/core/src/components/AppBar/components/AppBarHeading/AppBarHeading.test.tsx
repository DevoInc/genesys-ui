import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppBarHeading } from './AppBarHeading';

describe('components', () => {
  describe('AppBar', () => {
    describe('components', () => {
      describe('AppBarHeading', () => {
        test('render', () => {
          render(<AppBarHeading>test</AppBarHeading>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
