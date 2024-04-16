import { describe, test, expect } from 'vitest';

import { formatDate, getFormatTimeStr, isValidFormat } from './format';

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

describe('validarFormatoFecha', () => {
  test('should return true if the date has a valid format', () => {
    const dateStr = '15-04-2024';
    const formats = ['dd-MM-yyyy', 'yyyy-MM-dd', 'MM-dd-yyyy'];
    expect(isValidFormat(dateStr, formats)).toBe(true);
  });

  test('should return false if the date does not have a valid format', () => {
    const dateStr = '2024-15-04';
    const formats = ['dd-MM-yyyy', 'yyyy-MM-dd', 'MM-dd-yyyy'];
    expect(isValidFormat(dateStr, formats)).toBe(false);
  });
});
