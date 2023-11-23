import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioSer {
    constructor(){

    }

    async listUsario(id? : number){
        try{
            if(id){
                const user = await prisma.usuario.findUnique({
                    where: {
                        id
                    }
                })
            }
            else{
                const users = await prisma.usuario.findMany();
                return users;
            }
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
    async createUsuario(user: Prisma.UsuarioCreateInput){
        try{
            const newusuario = await prisma.usuario.create({
                data : user
            })
            return newusuario
        }
        catch(error){
            console.log(error)
            return null;
        }
    }
    async updateUsuario(id: number ,user: Prisma.UsuarioUpdateInput){
        try{
            const updusuario = await prisma.usuario.update({
                where: {
                    id
                },
                data: user
            })
            return updusuario;
        }
        catch(error){
            console.log(error)
            return null;
        }
    }
    async deleteUsuario(id: number){
        try{
            const dltusuario = await prisma.usuario.delete({
                where: {
                    id
                }
            })
            return dltusuario
        }
        catch(error){
            console.log(error)
            return null;
        }
    }
}

export default new UsuarioSer();