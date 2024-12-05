import { Router } from "express";
import paletteController from "../controllers/palette.controller";
const router = Router();

router.post("/new", paletteController.new);

export default router;
