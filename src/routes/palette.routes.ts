import { Router } from "express";
import paletteController from "../controllers/palette.controller";
const router = Router();

router.post("/new", paletteController.new);
router.get("/getPopular", paletteController.getPopular);
router.get("/getNew", paletteController.getNew);

export default router;
