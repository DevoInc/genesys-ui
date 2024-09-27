import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AvatarImage } from './AvatarImage';

describe('components', () => {
  describe('Avatar', () => {
    describe('components', () => {
      describe('AvatarImage', () => {
        test('render', () => {
          render(<AvatarImage alt={'test'} />);
          expect(screen.getByAltText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
