import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { CodeBlock } from './CodeBlock';

describe('components', () => {
  describe('CodeBlock', () => {
    test('render', () => {
      render(<CodeBlock tooltip={'tooltip'}>test</CodeBlock>);
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
