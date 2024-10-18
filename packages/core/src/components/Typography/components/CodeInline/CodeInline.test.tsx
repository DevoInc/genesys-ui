import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { CodeInline } from './CodeInline';

describe('components', () => {
  describe('CodeInline', () => {
    test('render', () => {
      render(<CodeInline tooltip={'tooltip'}>test</CodeInline>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
