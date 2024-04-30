import { describe, test, expect } from 'vitest';

import { formatDate, getFormatTimeStr, parseDate } from './format';

describe('getFormatTimeStr', () => {
  test('with seconds and millis', () => {
    const str = getFormatTimeStr(true, true);
    expect(str).toBe('HH:mm:ss.sss');
  });

  test('with seconds and not millis', () => {
    const str = getFormatTimeStr(true, false);
    expect(str).toBe('HH:mm:ss');
  });

  test('without seconds and millis', () => {
    const str = getFormatTimeStr(false, false);
    expect(str).toBe('HH:mm');
  });
});

describe('formatDate function', () => {
  test('should format date with default options', () => {
    const result = formatDate({
      ts: new Date(2024, 3, 15, 10, 30, 0),
    });
    expect(result).toBe('2024-04-15 10:30:00');
  });

  test('should format date without milliseconds', () => {
    const result = formatDate({
      ts: new Date(2024, 3, 15, 10, 30, 15, 500),
      hasMillis: false,
    });
    expect(result).toBe('2024-04-15 10:30:15');
  });

  test('should format date without seconds', () => {
    const result = formatDate({
      ts: new Date(2024, 3, 15, 10, 30, 15),
      hasSeconds: false,
    });
    expect(result).toBe('2024-04-15 10:30');
  });

  test('should format date without time', () => {
    const result = formatDate({
      ts: new Date(2024, 3, 15, 10, 30, 15),
      hasTime: false,
    });
    expect(result).toBe('2024-04-15');
  });

  test('should use custom format string', () => {
    const result = formatDate({
      ts: new Date(2024, 3, 15, 10, 30, 15),
      format: 'yyyy/MM/dd HH:mm',
    });
    expect(result).toBe('2024/04/15 10:30');
  });
});

describe('parseDate function', () => {
  test('should parse a valid date string correctly', () => {
    const result = parseDate('2024-04-26 12:00:00');
    expect(result.isValid).toBe(true);
    expect(result.value).toEqual(new Date('2024-04-26 12:00:00').getTime());
    expect(result.errors).toHaveLength(0);
  });

  test('should return isValid as false for an invalid date string', () => {
    const result = parseDate('invalid date');
    expect(result.isValid).toBe(false);
    expect(result.value).toBeNull();
    expect(result.errors).toContain('Invalid date');
  });

  test('should handle custom valid date formats', () => {
    const result = parseDate('2024/04/26 12:00:00', ['yyyy/MM/dd HH:mm:ss']);
    expect(result.isValid).toBe(true);
    expect(result.value).toEqual(new Date('2024/04/26 12:00:00').getTime());
    expect(result.errors).toHaveLength(0);
  });

  test('should return isValid as false for an empty date string', () => {
    const result = parseDate('');
    expect(result.isValid).toBe(false);
    expect(result.value).toBeNull();
    expect(result.errors).toContain('Invalid date');
  });
});
