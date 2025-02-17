import { describe, test, expect } from 'vitest';

import { findValue } from './findValue';

describe('findValue', () => {
  const cases: [string, any, any, any][] = [
    [
      'value is string and should return option',
      'a',
      [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
      { label: 'a', value: 'a' },
    ],
    [
      'value is string and should return option',
      ['a'],
      [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
      [{ label: 'a', value: 'a' }],
    ],
    [
      'value is string and should return option',
      [
        {
          value: 'TA0103',
          label: 'Evasion (TA0103)',
        },
      ],
      [
        {
          label: 'ENTERPRISE',
          options: [
            {
              value: 'TA0040',
              label: 'Impact (TA0040)',
            },
            {
              value: 'TA0042',
              label: 'Resource Development (TA0042)',
            },
            {
              value: 'TA0011',
              label: 'Command and Control (TA0011)',
            },
            {
              value: 'TA0010',
              label: 'Exfiltration (TA0010)',
            },
            {
              value: 'TA0043',
              label: 'Reconnaissance (TA0043)',
            },
          ],
        },
        {
          label: 'ICS',
          options: [
            {
              value: 'TA0103',
              label: 'Evasion (TA0103)',
            },
          ],
        },
        {
          label: 'MOBILE',
          options: [
            {
              value: 'TA0031',
              label: 'Credential Access (TA0031)',
            },
          ],
        },
      ],
      [
        {
          value: 'TA0103',
          label: 'Evasion (TA0103)',
        },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, val, options, expected) => {
    expect(findValue(val, options, true)).toEqual(expected);
  });
});
