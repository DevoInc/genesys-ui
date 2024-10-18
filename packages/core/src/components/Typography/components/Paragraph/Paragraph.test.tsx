import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render, screen } from '@test';
import { Paragraph } from './Paragraph';

describe('components', () => {
  describe('Paragraph', () => {
    test('Simple render', () => {
      const { container } = render(
        <Paragraph tooltip={'tooltip'}>{'Hello'}</Paragraph>,
      );
      expect(container.getElementsByTagName('p')[0]).toBeInTheDocument();
      expect(screen.getByTitle('tooltip')).toBeInTheDocument();
    });
  });
});
