import { Schema, model } from "mongoose";
import ColorSchema, { Palette } from "../interfaces/color.interface";

const colorSchema = new Schema<ColorSchema>(
  {
    hex: { type: String, required: true, match: /^#([0-9A-Fa-f]{3}){1,2}$/ },
    rgb: {
      r: { type: String, required: true },
      g: { type: String, required: true },
      b: { type: String, required: true },
    },
    hsl: {
      h: { type: String, required: true },
      s: { type: String, required: true },
      l: { type: String, required: true },
    },
    cmyk: {
      c: { type: String, required: true },
      m: { type: String, required: true },
      y: { type: String, required: true },
      k: { type: String, required: true },
    },
    lab: {
      l: { type: String, required: true },
      a: { type: String, required: true },
      b: { type: String, required: true },
    },
  },
  { _id: false }
);

const schema = new Schema<Palette>(
  {
    dark: { light: colorSchema, normal: colorSchema, dark: colorSchema },
    light: { light: colorSchema, normal: colorSchema, dark: colorSchema },
    primary: colorSchema,
    secondary: colorSchema,
    green: colorSchema,
    red: colorSchema,
    yellow: colorSchema,
    views: { type: Number, default: 0 },
  },
  { versionKey: false, timestamps: true }
);

export default model("Palette", schema);
