import { describe, test, expect } from 'vitest';
import { getCategory, getType } from './utils';
import { THeadingType } from '../../declarations';
import { TTypoBodySize } from '../../../../declarations';

describe('Core', () => {
  describe('Components', () => {
    describe('Typography', () => {
      describe('Heading', () => {
        describe('utils', () => {
          describe('getCategory', () => {
            const cases: [string, THeadingType, string][] = [
              ['basic', 'h1', 'heading'],
              ['hero', 'hero-sm', 'hero'],
              ['overline', 'overline-sm', 'overline'],
            ];
            test.each(cases)('%s', (_title, typeProp, expected) => {
              expect(getCategory(typeProp)).toBe(expected);
            });
          });

          describe('getType', () => {
            const cases: [
              string,
              THeadingType,
              THeadingType | TTypoBodySize,
            ][] = [
              ['basic', 'h1', 'h1'],
              ['hero', 'hero-sm', 'sm'],
              ['overline', 'overline-sm', 'sm'],
            ];
            test.each(cases)('%s', (_title, typeProp, expected) => {
              expect(getType(typeProp)).toBe(expected);
            });
          });
        });
      });
    });
  });
});
