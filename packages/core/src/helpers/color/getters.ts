import { Color } from './definitions';

export const colorName = (arr: Color[], name: string) => {
  let idx = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toUpperCase() === name.toUpperCase()) {
      idx = i;
      break;
    }
  }
  return { idx: idx, exists: idx > -1 };
};

export const getHexName = (colors: Color[], name: string) => {
  return colorName(colors, name).exists
    ? colors[colorName(colors, name).idx].hexString
    : '#000000';
};

export const areEqualColorNames = (c1: string, c2: string) =>
  c1.toLowerCase() === c2.toLowerCase();

export const findColorByName = (colors: Color[]) => (name: string) =>
  colors.find((color) => areEqualColorNames(color.name, name));
