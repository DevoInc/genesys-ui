import * as React from 'react';
import { render } from 'test-utils';
import { Divider } from './Divider';

const TEST_ID = 'divider';

describe('Divider', () => {
  test('Simple render', () => {
    const { container } = render(<Divider data-testid={TEST_ID} />);
    expect(container.getElementsByTagName('hr')[0]).toBeInTheDocument();
  });
});
