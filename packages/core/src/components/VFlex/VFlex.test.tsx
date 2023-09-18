import * as React from 'react';
import { render, screen } from 'test-utils';

import { VFlex } from './VFlex';

describe('VFlex', () => {
  test('render', () => {
    render(<VFlex>test</VFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      flexDirection: 'column',
    });
  });

  test('childrenFitFullHeight', () => {
    render(<VFlex childrenFitFullWidth>test</VFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      alignItems: 'stretch',
    });
  });
});
