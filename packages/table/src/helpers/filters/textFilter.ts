import type { TTextFilterValue } from '../../filters';

export const textFilter = (
  data: string,
  { value, operator }: TTextFilterValue,
) =>
  value === ''
    ? true
    : operator === 'contains'
      ? data.toLowerCase().includes(value.toLowerCase())
      : operator === 'notContains'
        ? !data.toLowerCase().includes(value.toLowerCase())
        : operator === 'blank'
          ? data === ''
          : operator === 'notBlank'
            ? data !== ''
            : operator === 'equals'
              ? data === value
              : operator === 'notEquals'
                ? data !== value
                : operator === 'beginsWith'
                  ? data.toLowerCase().startsWith(value.toLowerCase())
                  : operator === 'endsWith'
                    ? data.toLowerCase().endsWith(value.toLowerCase())
                    : true;
