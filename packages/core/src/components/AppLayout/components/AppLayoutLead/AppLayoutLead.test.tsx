import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AppLayoutLead } from './AppLayoutLead';

describe('components', () => {
  describe('AppLayout', () => {
    describe('components', () => {
      describe('AppLayoutLead', () => {
        test('render', () => {
          render(<AppLayoutLead>test</AppLayoutLead>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
