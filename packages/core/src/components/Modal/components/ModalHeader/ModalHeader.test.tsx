import * as React from 'react';
import { render } from 'test-utils';
import { ModalHeader } from './ModalHeader';

describe('ModalHeader', () => {
  test('Simple render', () => {
    const { container } = render(
      <ModalHeader>{'This is a test ModalHeader'}</ModalHeader>,
    );
    expect(container.getElementsByTagName('header')[0]).toBeInTheDocument();
  });
});
