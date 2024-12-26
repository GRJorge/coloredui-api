export default interface ColorSchema {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  hsl: {
    h: number;
    s: number;
    l: number;
  };
  cmyk: {
    c: number;
    m: number;
    y: number;
    k: number;
  };
  lab: {
    l: number;
    a: number;
    b: number;
  };
}

export interface Palette {
  dark: {
    light: ColorSchema;
    normal: ColorSchema;
    dark: ColorSchema;
  };
  light: {
    light: ColorSchema;
    normal: ColorSchema;
    dark: ColorSchema;
  };
  primary: ColorSchema;
  secondary: ColorSchema;
  green: ColorSchema;
  red: ColorSchema;
  yellow: ColorSchema;
  views?: number;
}
