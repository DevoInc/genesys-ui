import * as React from 'react';

import { render } from '@test';
import { Divider } from './Divider';

describe('Divider', () => {
  test('Simple render', () => {
    const { container } = render(<Divider />);
    expect(container.getElementsByTagName('hr')[0]).toBeInTheDocument();
  });
});
