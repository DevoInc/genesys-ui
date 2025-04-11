import * as React from 'react';
import { describe, test, expect, afterEach } from 'vitest';

import { Editor } from '@devoinc/genesys-ui-code';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('Editor', () => {
    test('render', async () => {
      render(<Editor value={'test'} />);
      const div = screen.getByRole('code') as HTMLDivElement;
      expect(div).toBeInTheDocument();
    });

    afterEach(() => {
      cleanup();
    });
  });
});
