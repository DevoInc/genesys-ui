import * as React from 'react';
import { render } from 'test-utils';
import { Panel } from './Panel';

describe('Panel', () => {
  test('Simple render', () => {
    const { container } = render(<Panel>{'This is a panel'}</Panel>);
    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument();
  });
});
