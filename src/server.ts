import express from 'express'
import LanceRouter from './routes/LanceRoute';
import LeilaoRouter from './routes/LeilaoRoute';
import MainRouter from './routes/MainRoute';
import UsuarioRouter from './routes/UsuarioRoute';

const app = express();
app.use(express.json());

app.use(MainRouter)
app.use(UsuarioRouter)
app.use(LanceRouter)
app.use(LeilaoRouter)

app.listen(3000,function(){
    console.log("Servidor esta rodando na porta 3000")
})