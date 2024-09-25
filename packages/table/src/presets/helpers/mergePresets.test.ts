import { describe, test, expect } from 'vitest';

import type {
  TDefaultRowDef,
  TRowDef,
  TRowPreset,
} from '../../declarations';

import { mergePresets } from './mergePresets';

describe('Presets', () => {
  describe('Helpers', () => {
    describe('mergePresets', () => {
      const cases: [
        string,
        TRowDef[],
        TRowPreset[],
        TDefaultRowDef,
        TRowDef[],
      ][] = [
        [
          'merge one preset',
          [
            {
              id: '2',
              preset: 'test',
            },
          ],
          [
            {
              style: 'background-color: rgb(255,200,200);',
              id: 'test',
            },
          ],
          {},
          [
            {
              id: '2',
              preset: 'test',
              style: 'background-color: rgb(255,200,200);',
            },
          ],
        ],
        [
          'merge one preset with default preset',
          [
            {
              id: '2',
              preset: 'test',
            },
          ],
          [
            {
              style: 'background-color: rgb(255,200,200);',
              id: 'test',
            },
          ],
          {
            hide: true,
          },
          [
            {
              id: '2',
              preset: 'test',
              style: 'background-color: rgb(255,200,200);',
              hide: true,
            },
          ],
        ],
        [
          'merge same property with diferent values',
          [
            {
              id: '2',
              preset: 'test',
              style: 'background-color: blue',
            },
          ],
          [
            {
              style: 'background-color: green',
              id: 'test',
            },
          ],
          {
            style: 'background-color: red',
          },
          [
            {
              id: '2',
              preset: 'test',
              style: 'background-color: blue',
            },
          ],
        ],
      ];

      test.each(cases)(
        '%s',
        (_title, definitions, presets, defaultDefinitions, expected) => {
          expect(
            mergePresets(definitions, presets, defaultDefinitions)()
          ).toMatchObject(expected);
        },
      );
    });
  });
});
