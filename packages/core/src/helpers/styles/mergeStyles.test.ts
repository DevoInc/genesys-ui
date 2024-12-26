import { describe, test, expect } from 'vitest';
import { css, CSSProp } from 'styled-components';

import { mergeStyles } from './mergeStyles';

describe('helpers', () => {
  describe('styles', () => {
    describe('mergeStyles', () => {
      const cases: [string, CSSProp[], string[]][] = [
        [
          'styles components & react styles',
          [
            css`
              color: red;
              position: absolute;
            `,
            css`
              background-color: white;
              .classy {
                font-weight: bold;
              }
            `,
            {
              borderColor: 'black',
            },
          ],
          [
            'color:red;position:absolute;',
            'background-color:white;.classy{font-weight:bold;}',
            'border-color: black;',
          ],
        ],
      ];
      test.each(cases)('%s', (_title, params, expected) => {
        expect(Array.from(mergeStyles(...params))).toEqual(expected);
      });
    });
  });
});
