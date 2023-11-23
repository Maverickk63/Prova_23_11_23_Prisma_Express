import { Router } from "express";
import UsuarioController from "../controllers/user.C"

const UsuarioRouter = Router();

UsuarioRouter.get('/usuarios', UsuarioController.listUsuarios)
UsuarioRouter.post('/usuario', UsuarioController.createUsuarios)
UsuarioRouter.put('/usuarios', UsuarioController.updateUsuario)
UsuarioRouter.delete('/usuario', UsuarioController.deleteUsuario)

export default UsuarioRouter;