import { describe, it, expect } from 'vitest';
import { mapTextsToColors } from './mapTextsToColors'; // Ajusta la ruta según tu proyecto

describe('helpers', () => {
  describe('assignRandomColors', () => {
    it('should return a color mapping for all unique texts', () => {
      const texts = ['apple', 'banana', 'cherry'];
      const colors = ['red', 'green', 'blue'];
      const result = mapTextsToColors(texts, colors);

      expect(Object.keys(result)).toHaveLength(3);
      expect(result).toHaveProperty('apple');
      expect(result).toHaveProperty('banana');
      expect(result).toHaveProperty('cherry');
    });

    it('should assign the same color to repeated texts', () => {
      const texts = ['apple', 'banana', 'apple', 'banana'];
      const colors = ['red', 'green', 'blue'];
      const result = mapTextsToColors(texts, colors);

      expect(result.apple).toBe(result.apple);
      expect(result.banana).toBe(result.banana);
    });

    it('should assign random colors from the provided colors array', () => {
      const texts = ['apple', 'banana', 'cherry'];
      const colors = ['red', 'green', 'blue'];
      const result = mapTextsToColors(texts, colors);

      Object.values(result).forEach((color) => {
        expect(colors).toContain(color);
      });
    });

    it('should handle an empty texts array', () => {
      const texts: string[] = [];
      const colors = ['red', 'green', 'blue'];
      const result = mapTextsToColors(texts, colors);

      expect(result).toEqual({});
    });

    it('should handle an empty colors array', () => {
      const texts = ['apple', 'banana', 'cherry'];
      const colors: string[] = [];
      const result = mapTextsToColors(texts, colors);

      expect(Object.keys(result)).toHaveLength(3);
    });
  });
});
