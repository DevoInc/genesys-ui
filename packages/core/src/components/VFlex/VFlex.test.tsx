import { describe, test, expect, afterEach } from 'vitest';
import * as React from 'react';
import { cleanup } from '@testing-library/react';

import { VFlex } from '@devoinc/genesys-ui';

import { render, screen } from '@test';
import { FLEX_PROPS_CLASS_NAMES_MAP } from '../../constants';

describe('VFlex', () => {
  test('render', () => {
    render(<VFlex>test</VFlex>);
    expect(screen.getByText('test')).toHaveClass(
      FLEX_PROPS_CLASS_NAMES_MAP['flexDirection']['column'],
    );
  });

  afterEach(() => {
    cleanup();
  });
});
