import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoSer {
    constructor(){

    }

    async listleilao(id? : number){
        try{
            if(id){
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        id
                    }
                })
            }
            else{
                const leilao = await prisma.leilao.findMany();
                return leilao;
            }
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoSer();