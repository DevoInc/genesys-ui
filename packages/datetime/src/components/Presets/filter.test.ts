import { describe, test, expect } from 'vitest';

import { filterPreset, removeEmptyGroups } from './filter';
import type { TPreset } from './declarations';

describe('Presets', () => {
  describe('filter', () => {
    describe('filterPreset', () => {
      const cases: [string, TPreset[], string, TPreset[]][] = [
        [
          'matching all',
          [
            { label: 'Group 1' },
            { label: 'Preset 1', value: [] },
            { label: 'Preset 2', value: [] },
            { label: 'Group 2' },
            { label: 'Preset 3', value: [] },
          ],
          'preset',
          [
            { label: 'Group 1' },
            { label: 'Preset 1', value: [] },
            { label: 'Preset 2', value: [] },
            { label: 'Group 2' },
            { label: 'Preset 3', value: [] },
          ],
        ],
        [
          'matching only one',
          [
            { label: 'Group 1' },
            { label: 'Preset 1', value: [] },
            { label: 'Preset 2', value: [] },
            { label: 'Group 2' },
            { label: 'Preset 3', value: [] },
          ],
          '3',
          [
            { label: 'Group 1' },
            { label: 'Group 2' },
            { label: 'Preset 3', value: [] },
          ],
        ],
      ];

      test.each(cases)('%s', (_title, presets, term, expected) => {
        expect(presets.filter(filterPreset(term))).toEqual(expected);
      });
    });

    describe('removeEmptyGroups', () => {
      const cases: [string, TPreset[], TPreset[]][] = [
        [
          'remove empty groups',
          [
            { label: 'Group 1' },
            { label: 'Group 2' },
            { label: 'Preset 2', value: [] },
          ],
          [{ label: 'Group 2' }, { label: 'Preset 2', value: [] }],
        ],
        [
          'nothing to remove',
          [
            { label: 'Group 1' },
            { label: 'Preset 1', value: [] },
            { label: 'Group 2' },
            { label: 'Preset 2', value: [] },
          ],
          [
            { label: 'Group 1' },
            { label: 'Preset 1', value: [] },
            { label: 'Group 2' },
            { label: 'Preset 2', value: [] },
          ],
        ],
      ];

      test.each(cases)('%s', (_title, presets, expected) => {
        expect(removeEmptyGroups(presets)).toEqual(expected);
      });
    });
  });
});
