import { describe, it, expect, afterEach } from 'vitest';
import * as React from 'react';
import { cleanup } from '@testing-library/react';

import { Wrap } from '@devoinc/genesys-ui';

import { render, screen } from '@test';
import { FLEX_PROPS_CLASS_NAMES_MAP } from '../../constants';

describe('Wrap', () => {
  it('default render', () => {
    render(<Wrap>test</Wrap>);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveClass(
      FLEX_PROPS_CLASS_NAMES_MAP['flexWrap']['wrap'],
    );
  });
  afterEach(() => {
    cleanup();
  });
});
