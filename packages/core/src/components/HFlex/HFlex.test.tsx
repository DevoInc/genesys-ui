import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { HFlex } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('HFlex', () => {
  test('render', () => {
    render(<HFlex>test</HFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      flexDirection: 'row',
      flexWrap: 'nowrap',
    });
  });
});
