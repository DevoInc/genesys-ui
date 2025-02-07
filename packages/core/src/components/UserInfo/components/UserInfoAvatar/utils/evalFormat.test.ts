import { describe, it, expect } from 'vitest';
import { evalFormatFN } from './evalFormat';
import { TUserInfoFormat } from '../../../declarations';

describe('userInfo', () => {
  describe('userInfoAvatar', () => {
    describe('evalFormatFN', () => {
      it('should return the format if it is not "base"', () => {
        const format: TUserInfoFormat = 'heading';
        const subtitle = null;
        const result = evalFormatFN(format, subtitle);
        expect(result).toBe('heading');
      });

      it('should return "bold" if format is "base" and subtitle is provided', () => {
        const format: TUserInfoFormat = 'base';
        const subtitle = 'Subtitle';
        const result = evalFormatFN(format, subtitle);
        expect(result).toBe('bold');
      });

      it('should return "base" if format is "base" and subtitle is not provided', () => {
        const format: TUserInfoFormat = 'base';
        const subtitle = null;
        const result = evalFormatFN(format, subtitle);
        expect(result).toBe('base');
      });
    });
  });
});
