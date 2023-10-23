import * as React from 'react';
import { render } from 'test-utils';
import { ModalFooter } from './ModalFooter';

describe('ModalFooter', () => {
  test('Simple render', () => {
    const { container } = render(
      <ModalFooter>{'This is a test ModalFooter'}</ModalFooter>,
    );
    expect(container.getElementsByTagName('footer')[0]).toBeInTheDocument();
  });
});
