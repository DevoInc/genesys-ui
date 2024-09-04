import { describe, test, expect } from 'vitest';

import { updateSelection } from './selection';

describe('updateSelection', () => {
  const cases: [string, string[], string, string[]][] = [
    ['return array with id', [], '1', ['1']],
    ['return array without id', ['1'], '1', []],
  ];

  test.each(cases)('%s', (_title, selection, id, expected) => {
    expect(updateSelection(selection)(id)).toEqual(expected);
  });
});
