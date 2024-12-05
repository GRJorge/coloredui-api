import { Schema, model } from "mongoose";

const colorSchema = new Schema(
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
  },
  { _id: false }
);

const schema = new Schema(
  {
    dark: { 0: colorSchema, 1: colorSchema, 2: colorSchema },
    light: { 0: colorSchema, 1: colorSchema, 2: colorSchema },
    primary: colorSchema,
    secondary: colorSchema,
    green: colorSchema,
    red: colorSchema,
    yellow: colorSchema,
  },
  { versionKey: false }
);

export default model("Palette", schema);
