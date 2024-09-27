import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AvatarContainer } from './AvatarContainer';

describe('components', () => {
  describe('Avatar', () => {
    describe('components', () => {
      describe('AvatarContainer', () => {
        test('render', () => {
          render(<AvatarContainer>test</AvatarContainer>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
