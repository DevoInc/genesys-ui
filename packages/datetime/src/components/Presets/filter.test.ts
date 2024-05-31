import { describe, test, expect } from 'vitest';

import { filterPresets } from './filter';
import { TPreset } from './declarations';

describe('filterPresets', () => {
  const cases: [string, TPreset[], string, TPreset[]][] = [
    [
      'matching all',
      [
        { label: 'Group 1' },
        { label: 'Preset 1', value: 'preset-1' },
        { label: 'Preset 2', value: 'preset-2' },
        { label: 'Group 2' },
        { label: 'Preset 3', value: 'preset-3' },
      ],
      'preset',
      [
        { label: 'Group 1' },
        { label: 'Preset 1', value: 'preset-1' },
        { label: 'Preset 2', value: 'preset-2' },
        { label: 'Group 2' },
        { label: 'Preset 3', value: 'preset-3' },
      ],
    ],
    [
      'matching only one',
      [
        { label: 'Group 1' },
        { label: 'Preset 1', value: 'preset-1' },
        { label: 'Preset 2', value: 'preset-2' },
        { label: 'Group 2' },
        { label: 'Preset 3', value: 'preset-3' },
      ],
      '3',
      [
        { label: 'Group 2' },
        { label: 'Preset 3', value: 'preset-3' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, presets, term, expected) => {
    expect(filterPresets(presets, term)).toEqual(expected);
  });
});
