import { Request, Response } from "express";
import colorService from "../services/color.service";
import paletteModel from "../models/palette.model";
import { Palette } from "../interfaces/color.interface";

class PaletteController {
  async new(req: Request, res: Response) {
    const { dark, light, primary, secondary, green, red, yellow } = req.body;

    const newPalette: Palette = {
      dark: {
        light: colorService.hexToColorSchema(dark.light),
        normal: colorService.hexToColorSchema(dark.normal),
        dark: colorService.hexToColorSchema(dark.dark),
      },
      light: {
        light: colorService.hexToColorSchema(light.light),
        normal: colorService.hexToColorSchema(light.normal),
        dark: colorService.hexToColorSchema(light.dark),
      },
      primary: colorService.hexToColorSchema(primary),
      secondary: colorService.hexToColorSchema(secondary),
      green: colorService.hexToColorSchema(green),
      red: colorService.hexToColorSchema(red),
      yellow: colorService.hexToColorSchema(yellow),
    };

    try {
      const savePalette = await new paletteModel(newPalette).save();
      res.status(200).json(savePalette);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PaletteController();
