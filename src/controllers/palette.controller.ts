import { Request, Response } from "express";
import paletteModel from "../models/palette.model";

class PaletteController {
  new(req: Request, res: Response) {
    const { dark, light, primary, secondary, green, red, yellow } = req.body;

    const newColor = {
      dark: { light: dark.light, normal: dark.normal, dark: dark.dark },
      light: { light: light.light, normal: light.normal, dark: light.dark },
      primary,
      secondary,
      green,
      red,
      yellow,
    };

    res.json(newColor);
  }
}

export default new PaletteController();
