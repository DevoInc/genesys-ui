import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { HFlex } from '@devoinc/genesys-ui';

import { render, screen } from '@test';
import { FLEX_PROPS_CLASS_NAMES_MAP } from '../../constants';

describe('HFlex', () => {
  test('render', () => {
    render(<HFlex>test</HFlex>);
    expect(screen.getByText('test')).toHaveClass(
      FLEX_PROPS_CLASS_NAMES_MAP['flexDirection']['row'],
    );
    expect(screen.getByText('test')).toHaveClass(
      FLEX_PROPS_CLASS_NAMES_MAP['flexWrap']['nowrap'],
    );
  });
});
