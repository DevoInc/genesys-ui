export interface Color {
  colorId: number;
  hexString: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  name: string;
}
