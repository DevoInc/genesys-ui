import { describe, test, expect } from 'vitest';
import { getTypoVariantAndSizeFromFormat } from './utils';
import { TTypoCategories, TTypographyFormat } from './declarations';
import { TTypoSize } from 'src/declarations';

describe('Core', () => {
  describe('Components', () => {
    describe('Typography', () => {
      describe('utils', () => {
        describe('getCategory', () => {
          type Treturn = {
            size: TTypoSize;
            variant: TTypoCategories;
          };
          const cases: [string, TTypographyFormat, Treturn][] = [
            ['basic', 'mono-sm', { size: 'sm', variant: 'mono' }],
            ['basic', null, { size: 'md', variant: 'body' }],
            ['basic', undefined, { size: 'md', variant: 'body' }],
          ];
          test.each(cases)('%s', (_title, formatProp, expected) => {
            expect(getTypoVariantAndSizeFromFormat(formatProp)).toStrictEqual(expected);
          });
        });
      });
    });
  });
});
