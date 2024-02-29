import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render } from '@test';
import { BannerContent } from './BannerContent';

describe('BannerContent', () => {
  test('Simple render with children being text', () => {
    const { container } = render(<BannerContent>{'Hello'}</BannerContent>);
    expect(container.getElementsByTagName('p')[0]).toBeInTheDocument();
  });

  test('Simple render with children being a React element', () => {
    const { container } = render(
      <BannerContent>
        <span>{'Hello'}</span>
      </BannerContent>,
    );
    expect(container.getElementsByTagName('span')[0]).toBeInTheDocument();
  });
});
