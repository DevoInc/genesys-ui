interface IRGBColor {
  r: number;
  g: number;
  b: number;
}
interface IHSLColor {
  h: number;
  s: number;
  l: number;
}

export type TColor = string | IRGBColor | IHSLColor;
