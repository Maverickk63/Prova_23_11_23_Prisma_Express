import { Request, Response } from "express";
import LeilaoSer from "../services/Leilao.S"

class LeilaoController{
    constructor(){

    }
    async listLeilao(req: Request, res:Response){
        const users = LeilaoSer.listleilao();

        res.status(200).json({
            status: 'sucesso',
            users: users
        })
    }
}

export default new LeilaoController;