import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LanceSer {
    constructor(){

    }

    async listlance(id? : number){
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id
                    }
                })
            }
            else{
                const lance = await prisma.lance.findMany();
                return lance;
            }
        }
        catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceSer();