import { NumberFilterValue } from '../../../filters';

export const numberFilter = (
  data: number,
  { value, secondValue, operator }: NumberFilterValue,
) =>
  value === ''
    ? true
    : operator === 'equals'
      ? data === Number(value)
      : operator === 'notEquals'
        ? data !== Number(value)
        : operator === 'greater'
          ? data > Number(value)
          : operator === 'greaterOrEqual'
            ? data >= Number(value)
            : operator === 'less'
              ? data < Number(value)
              : operator === 'lessOrEqual'
                ? data <= Number(value)
                : operator === 'between'
                  ? Number(value) > Number(secondValue)
                    ? data > Number(secondValue) && data < Number(value)
                    : data > Number(value) && data < Number(secondValue)
                  : true;
