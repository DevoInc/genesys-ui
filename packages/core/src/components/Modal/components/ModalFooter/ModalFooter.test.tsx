import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { ModalFooter } from './ModalFooter';

describe('ModalFooter', () => {
  test('Simple render', () => {
    const { container } = render(
      <ModalFooter>{'This is a test ModalFooter'}</ModalFooter>,
    );
    expect(container.getElementsByTagName('footer')[0]).toBeInTheDocument();
  });
});
