import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AvatarBadge } from './AvatarBadge';

describe('components', () => {
  describe('Avatar', () => {
    describe('components', () => {
      describe('AvatarBadge', () => {
        test('render', () => {
          render(<AvatarBadge>test</AvatarBadge>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
