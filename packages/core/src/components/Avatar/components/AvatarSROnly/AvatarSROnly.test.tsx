import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '@test';
import { AvatarSROnly } from './AvatarSROnly';

describe('components', () => {
  describe('Avatar', () => {
    describe('components', () => {
      describe('AvatarSROnly', () => {
        test('render', () => {
          render(<AvatarSROnly>test</AvatarSROnly>);
          expect(screen.getByText('test')).toBeInTheDocument();
        });
      });
    });
  });
});
