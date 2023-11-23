import { Router } from "express";
import LeilaoController from "../controllers/leilao.C"

const LeilaoRouter = Router();

LeilaoRouter.get('/lances', LeilaoController.listLeilao)

export default LeilaoRouter;