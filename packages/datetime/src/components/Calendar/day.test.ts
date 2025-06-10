import { describe, test, expect } from 'vitest';
import { isAfter } from 'date-fns';

import { getDayProperties, getClassNameFromProperties } from './day';

describe('Calendar', () => {
  describe('day', () => {
    describe('getDayProperties', () => {
      test('day at the start of selection', () => {
        expect(
          getDayProperties(
            new Date(2022, 11, 2).getTime(),
            new Date(2022, 11, 6).getTime(),
            30,
            (dt) => {
              const isValid = !isAfter(dt, new Date(2022, 12, 14));
              return {
                isValid,
                value: dt,
                errors: isValid ? [] : ['Out of range'],
              };
            },
            null,
            true,
            true,
          )(new Date(2022, 11, 2)),
        ).toStrictEqual({
          ts: new Date(2022, 11, 2).getTime(),
          monthDay: 2,
          isValid: true,
          errors: [],
          isDisabled: false,
          isSelected: true,
          isFrom: true,
          isTo: false,
          isLastDayOfMonth: false,
          isInsideSelection: true,
          isBoxShadowRight: null,
          isBoxShadowLeft: null,
          isNextBoxShadow: null,
          isPrevBoxShadow: null,
          isRightHover: null,
        });
      });
    });
    describe('getClassNameFromProperties', () => {
      test('day at the start of selection', () => {
        expect(
          getClassNameFromProperties({
            ts: new Date(2022, 11, 2).getTime(),
            monthDay: 2,
            isValid: true,
            errors: [],
            isDisabled: false,
            isSelected: true,
            isFrom: true,
            isTo: false,
            isLastDayOfMonth: false,
            isInsideSelection: true,
            isBoxShadowRight: null,
            isBoxShadowLeft: null,
            isNextBoxShadow: null,
            isPrevBoxShadow: null,
            isRightHover: null,
          }),
        ).toStrictEqual(['selected', 'from-selected', 'highlight']);
      });
    });
  });
});
