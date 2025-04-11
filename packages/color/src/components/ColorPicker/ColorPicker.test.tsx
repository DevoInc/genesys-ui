import * as React from 'react';
import { describe, test, expect, afterEach } from 'vitest';

import { ColorPicker } from '@devoinc/genesys-ui-color';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('ColorPicker', () => {
    test('render', async () => {
      render(
        <ColorPicker defaultValue={'#ffeeee'} id={'test'} label={'Test'} />,
      );
      const div = screen.getByRole('button') as HTMLDivElement;
      expect(div).toBeInTheDocument();
    });

    afterEach(() => {
      cleanup();
    });
  });
});
