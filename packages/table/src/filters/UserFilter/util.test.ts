import { describe, it, expect } from 'vitest';
import { concatenateValues, TInput } from './util';

describe('concatenateValues', () => {
  it('should concatenate name and subtitle correctly', () => {
    const input: TInput = {
      user1: { name: 'John Doe', subtitle: 'Engineer' },
    };

    const result = concatenateValues(input);

    expect(result.user1).toBe('john doeengineer');
  });

  it('should handle missing subtitle gracefully', () => {
    const input: TInput = {
      user1: { name: 'John Doe' },
    };

    const result = concatenateValues(input);

    expect(result.user1).toBe('john doe');
  });

  it('should handle input with mixed case for name and subtitle', () => {
    const input: TInput = {
      user1: { name: 'John Doe', subtitle: 'Engineer' },
    };

    const result = concatenateValues(input);

    expect(result.user1).toBe('john doeengineer');
  });

  it('should return an empty object for empty input', () => {
    const input: TInput = {};

    const result = concatenateValues(input);

    expect(result).toEqual({});
  });

  it('should concatenate correctly even when optional fields are missing', () => {
    const input: TInput = {
      user1: {
        name: 'Jane Doe',
        subtitle: 'Developer',
        email: 'jane.doe@example.com',
      },
    };

    const result = concatenateValues(input);

    expect(result.user1).toBe('jane doedeveloper');
  });

  it('should handle special characters in name and subtitle', () => {
    const input: TInput = {
      user1: { name: 'John-Doe', subtitle: 'Senior@Engineer' },
    };

    const result = concatenateValues(input);

    expect(result.user1).toBe('john-doesenior@engineer');
  });
});
