import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioSer from "../services/user.S"

class UsuarioController{
    constructor(){

    }
    async listUsuarios(req: Request, res:Response){
        const users = UsuarioSer.listUsario();

        res.status(200).json({
            status: 'sucesso',
            users: users
        })
    }
    async createUsuarios(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body

        if(dados.email !== "" && dados.name !== ""){
            const newuser = await UsuarioSer.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }
    async updateUsuario(req: Request, res: Response){
        res.send('update user, não implementada completamente')
    }
    async deleteUsuario(req: Request, res: Response){
        res.send('delete user, não implementada completamente')
    }
}

export default new UsuarioController;