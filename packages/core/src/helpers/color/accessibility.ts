import { colors } from './colors';
import { isValidColor } from './validation';
import { getHexName } from './getters';

const cutHex = (h: string) => (h.charAt(0) === '#' ? h.substring(1, 7) : h);
const hexToR = (h: string) => parseInt(cutHex(h).substring(0, 2), 16);
const hexToG = (h: string) => parseInt(cutHex(h).substring(2, 4), 16);
const hexToB = (h: string) => parseInt(cutHex(h).substring(4, 6), 16);

/**
 * Get the AA accessible text color over a specific background color
 *
 * @param bgColor - the background color value: rgb(0,0,0), #000, black...
 * @param lightColor - the desired light text color value over dark background colors
 * @param darkColor - string with the desired dark text color value over light background colors
 * @returns AA accessible dark color or light color
 */
export const getAccTextColor = (
  bgColor: string,
  lightColor: string,
  darkColor: string,
) => {
  const threshold = 128;
  const isHex = bgColor.startsWith('#');
  const isRGB = bgColor.startsWith('rgb');
  const isRGBA = bgColor.startsWith('rgba');
  const named = !isHex && !isRGB && !isRGBA;
  bgColor =
    isValidColor(bgColor) && !named ? bgColor : getHexName(colors, bgColor);
  const rgbArray =
    isRGB &&
    (isRGBA
      ? bgColor
          .substring(5, bgColor.length - 1)
          .replace(' ', '')
          .split(',')
          .map(parseInt)
      : bgColor
          .substring(4, bgColor.length - 1)
          .replace(' ', '')
          .split(',')
          .map(parseInt));

  const hRed = isHex || named ? hexToR(bgColor) : rgbArray[0];
  const hGreen = isHex || named ? hexToG(bgColor) : rgbArray[1];
  const hBlue = isHex || named ? hexToB(bgColor) : rgbArray[2];

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  return cBrightness > threshold
    ? darkColor || '#272727'
    : lightColor || '#ffffff';
};

