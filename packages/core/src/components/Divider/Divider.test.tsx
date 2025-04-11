import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Divider } from '@devoinc/genesys-ui';

import { render } from '@test';

describe('Divider', () => {
  test('Simple render', () => {
    const { container } = render(<Divider />);
    expect(container.getElementsByTagName('hr')[0]).toBeInTheDocument();
  });
});
