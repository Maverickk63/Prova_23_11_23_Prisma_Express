import { Request, Response, Router } from "express";
import path from "path";

const MainRouter = Router()

MainRouter.get('/', function(req: Request, res: Response){
    res.sendFile(path.join(__dirname) + '../views/index.html');
})

export default MainRouter