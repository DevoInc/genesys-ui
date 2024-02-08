interface RGBColor {
  r: number;
  g: number;
  b: number;
}
interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export type Color = string | RGBColor | HSLColor;
