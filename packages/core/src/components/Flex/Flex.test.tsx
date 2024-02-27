import * as React from 'react';

import { render, screen } from '@test';
import { Flex } from './Flex';

describe('Flex', () => {
  test('render', () => {
    render(<Flex>test</Flex>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
