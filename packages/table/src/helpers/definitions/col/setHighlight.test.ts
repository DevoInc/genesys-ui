import { describe, test, expect } from 'vitest';

import { TColDef } from '../../../declarations';
import { setHighlight } from './setHighlight';

describe('helpers', () => {
  describe('definitions', () => {
    describe('col', () => {
      describe('setHighlight', () => {
        const cases: [string, TColDef[], string, boolean, TColDef[]][] = [
          [
            'set isHighlighted with id colDef',
            [{ id: '1' }],
            '1',
            true,
            [{ id: '1', isHighlighted: true }],
          ],
          [
            'isHighlighted when id is not coldefs',
            [{ id: '1' }],
            '2',
            true,
            [{ id: '1', isHighlighted: false }],
          ],
          [
            'return empty array with coldefs null',
            null,
            '2',
            true,
            [],
          ],
          [
            'isHighlighted false with id null',
            [{ id: '1' }],
            null,
            true,
            [{ id: '1', isHighlighted: false }],
          ],
          [
            'isHighlighted false with isHighlighted null',
            [{ id: '1' }],
            '1',
            null,
            [{ id: '1', isHighlighted: false }],
          ],
        ];

        test.each(cases)(
          '%s',
          (_title, coldefs, id, isHighlighted, expected) => {
            expect(setHighlight(coldefs, id, isHighlighted)).toEqual(expected);
          },
        );
      });
    });
  });
});
