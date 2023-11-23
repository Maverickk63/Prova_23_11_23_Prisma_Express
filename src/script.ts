import { PrismaClient } from "@prisma/client";
import userS from "./services/user.S";

const prisma = new PrismaClient()

async function main(){
    //script para listar os usuarios usando o user.S.ts
    console.log(await userS.listUsario)
}

main()
    .then(async () =>{
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })