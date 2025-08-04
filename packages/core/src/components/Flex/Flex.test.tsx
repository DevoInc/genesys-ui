import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';

import { render, screen } from '@test';
import {
  FLEX_PROPS_CLASS_NAMES_MAP,
  LAYOUT_PROPS_CLASS_NAMES_MAP,
} from '../../constants';

describe('Flex', () => {
  test('render', () => {
    render(<Flex>test</Flex>);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveClass(
      LAYOUT_PROPS_CLASS_NAMES_MAP['display']['flex'],
    );
  });
});
