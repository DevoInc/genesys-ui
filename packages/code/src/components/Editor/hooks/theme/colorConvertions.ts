const hexRegex = /^#([0-9a-f]{3}){1,2}$/i;

const isHex = (color: string): boolean => {
  return hexRegex.test(color);
};

export const convertRGBAToHexA = (color: string): string => {
  if (isHex(color)) {
    return color;
  }

  const sep = color.indexOf(',') > -1 ? ',' : ' ';

  const rgba = color.substr(5).split(')')[0].split(sep);

  const r = (+rgba[0]).toString(16).padStart(2, '0'),
    g = (+rgba[1]).toString(16).padStart(2, '0'),
    b = (+rgba[2]).toString(16).padStart(2, '0'),
    a = Math.round(+rgba[3] * 255)
      .toString(16)
      .padStart(2, '0');

  return '#' + r + g + b + a;
};
