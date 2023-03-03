import { parseToRgb } from 'polished';
import _isEqual from 'lodash/isEqual';
import { RgbaColor } from 'polished/lib/types/color';

/**
 * Parse value to the RGBA object format (Inner format):
 * { red: ..., green: ..., blue: ..., alpha: ... }
 * Alpha always presents, even if it is equal to 1.
 */
export const strColorToRGBAColor = (v = '', d: string): RgbaColor => {
  const color = parseToRgb(!v || v.trim() === '' ? d : v);
  if (!('alpha' in color)) (color as RgbaColor).alpha = 1;
  return color as RgbaColor;
};

/**
 * Parse ColorPicker value to RGBA object format (Inner format):
 * { red: ..., green: ..., blue: ..., alpha: ... }
 * Alpha always presents, even if it is equal to 1.
 */
export const colorFromColorPickerValue = (c: {
  [key: string]: any;
}): RgbaColor => {
  return { red: c.r, green: c.g, blue: c.b, alpha: c.a || 1 };
};

/**
 * Compare two RGBA object format (Inner format):
 * { red: ..., green: ..., blue: ..., alpha: ... }
 * Alpha always presents, even if it is equal to 1.
 */
export const checkEqualColors = (c1: RgbaColor, c2: RgbaColor): boolean => {
  return _isEqual(c1, c2);
};
