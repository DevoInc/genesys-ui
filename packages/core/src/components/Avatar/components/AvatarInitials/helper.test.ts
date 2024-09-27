import { describe, test, expect } from 'vitest';

import { formatInitials, getInitialsFromName } from './helper';

describe('components', () => {
  describe('Avatar', () => {
    describe('components', () => {
      describe('AvatarInitials', () => {
        describe('helper', () => {
          test('formatInitials', () => {
            expect(formatInitials('test')).toBe('TE');
          });
          test('formatInitials', () => {
            expect(getInitialsFromName('aaa bbb ccc')).toBe('ab');
          });
        });
      });
    });
  });
});
