import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AvatarInitials } from './AvatarInitials';

describe('components', () => {
  describe('Avatar', () => {
    describe('components', () => {
      describe('AvatarInitials', () => {
        test('render with initials', () => {
          render(<AvatarInitials name="test test test" initials="TT" />);
          expect(screen.getByText('TT')).toBeInTheDocument();
        });
        test('render with name', () => {
          render(<AvatarInitials name="aaa bbb ccc" />);
          expect(screen.getByText('AB')).toBeInTheDocument();
        });
      });
    });
  });
});
