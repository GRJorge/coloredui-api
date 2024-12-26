import ColorSchema from "../interfaces/color.interface";
import Color from "color";

class ColorService {
  hexToColorSchema(hex: string): ColorSchema {
    const color = Color(hex);
    const rgb = color.rgb().object();
    const hsl = color.hsl().object();
    const cmyk = color.cmyk().object();
    const lab = color.lab().object();

    const newColorSchema: ColorSchema = {
      hex,
      rgb: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
      },
      hsl: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
      },
      cmyk: {
        c: cmyk.c,
        m: cmyk.m,
        y: cmyk.y,
        k: cmyk.k,
      },
      lab: {
        l: lab.l,
        a: lab.a,
        b: lab.b,
      },
    };
    return newColorSchema;
  }
}

export default new ColorService();
