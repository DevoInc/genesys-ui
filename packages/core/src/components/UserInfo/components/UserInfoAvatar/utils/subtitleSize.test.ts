import { describe, it, expect } from 'vitest';
import { subtitleSize } from './subtitleSize';

describe('userInfo', () => {
  describe('userInfoAvatar', () => {
    describe('subtitleSize', () => {
      it('should return "xs" when size is "sm"', () => {
        expect(subtitleSize('sm')).toBe('xs');
      });

      it('should return "md" when size is "lg"', () => {
        expect(subtitleSize('lg')).toBe('md');
      });

      it('should return "sm" when size is not "sm" or "lg"', () => {
        expect(subtitleSize('md')).toBe('sm');
        expect(subtitleSize(null)).toBe('sm');
        expect(subtitleSize(undefined)).toBe('sm');
      });
    });
  });
});
