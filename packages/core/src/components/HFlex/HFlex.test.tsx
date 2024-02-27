import * as React from 'react';

import { render, screen } from '@test';
import { HFlex } from './HFlex';

describe('HFlex', () => {
  test('render', () => {
    render(<HFlex>test</HFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      flexDirection: 'row',
      flexWrap: 'nowrap',
    });
  });
});
