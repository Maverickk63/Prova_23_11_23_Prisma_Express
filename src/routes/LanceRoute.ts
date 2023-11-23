import { Router } from "express";
import LanceController from "../controllers/lance.C"

const LanceRouter = Router();

LanceRouter.get('/lances', LanceController.listLance)

export default LanceRouter;