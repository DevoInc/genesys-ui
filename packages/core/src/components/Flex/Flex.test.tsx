import * as React from 'react';
import { render, screen } from 'test-utils';

import { Flex } from './Flex';

describe('Flex', () => {
  test('default render', () => {
    render(<Flex>test</Flex>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('css props', () => {
    render(
      <Flex gap="cmp-md" height="30rem" overflow="auto" width="60rem">
        test
      </Flex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      display: 'flex',
      gap: '1.6rem',
      height: '30rem',
      overflow: 'auto',
      width: '60rem',
    });
  });
});
