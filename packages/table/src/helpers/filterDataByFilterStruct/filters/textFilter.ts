import { TextFilterValue } from '../../../filters';

export const textFilter = (
  data: string,
  { value, operator }: TextFilterValue,
) =>
  operator === 'contains'
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
                ? data.startsWith(value)
                : operator === 'endsWith'
                  ? data.endsWith(value)
                  : true;
