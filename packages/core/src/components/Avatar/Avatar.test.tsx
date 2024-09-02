import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { Avatar } from './Avatar';

const minimalImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII';

describe('components', () => {
  describe('Avatar', () => {
    test('render with text', () => {
      render(<Avatar name="test1" initials="TE" />);
      expect(screen.getByText('TE')).toBeInTheDocument();
      expect(screen.getByText('test1')).toBeInTheDocument();
    });
    test('render with image', () => {
      render(<Avatar name="test2" imageSrc={minimalImage} />);
      expect(screen.getByText('test2')).toBeInTheDocument();
      expect(screen.getByAltText('test2')).toHaveAttribute('src', minimalImage);
    });
  });
});
