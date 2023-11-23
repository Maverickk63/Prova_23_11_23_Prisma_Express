import { Request, Response } from "express";
import LanceSer from "../services/Lance.S"

class LanceController{
    constructor(){

    }
    async listLance(req: Request, res:Response){
        const users = LanceSer.listlance();

        res.status(200).json({
            status: 'sucesso',
            users: users
        })
    }
}

export default new LanceController;