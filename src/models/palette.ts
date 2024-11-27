import { Schema, model } from "mongoose";

const colorSchema = new Schema(
  {
    hex: { type: String, required: true, match: /^#([0-9A-Fa-f]{3}){1,2}$/ },
    rgb: { type: String, required: true, match: /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/ },
    hsl: { type: String, required: true, match: /^hsl\(\d+, \d+%, \d+%\)$/ },
  },
  { _id: false }
);

const schema = new Schema(
  {
    dark: { 0: colorSchema, 50: colorSchema, 100: colorSchema },
    light: { 0: colorSchema, 50: colorSchema, 100: colorSchema },
    primary: colorSchema,
    secondary: colorSchema,
    green: colorSchema,
    red: colorSchema,
    yellow: colorSchema,
  },
  { versionKey: false }
);

export default model("Palette", schema);
