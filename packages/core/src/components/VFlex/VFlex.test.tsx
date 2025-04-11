import { describe, test, expect, afterEach } from 'vitest';
import * as React from 'react';
import { cleanup } from '@testing-library/react';

import { VFlex } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

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

  afterEach(() => {
    cleanup();
  });
});
