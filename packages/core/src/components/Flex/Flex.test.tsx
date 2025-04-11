import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';

import { render, screen } from '@test';

describe('Flex', () => {
  test('render', () => {
    render(<Flex>test</Flex>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
