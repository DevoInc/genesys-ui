import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  test('Simple render', () => {
    const { container } = render(<Paragraph>{'Hello'}</Paragraph>);
    expect(container.getElementsByTagName('p')[0]).toBeInTheDocument();
  });
});
