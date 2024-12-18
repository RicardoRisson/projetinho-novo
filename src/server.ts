import express, { Request, Response } from 'express';
import { router } from './routes/index';
import { StatusCodes } from 'http-status-codes';
import 'dotenv/config'
///// imports

const server = express();
/////variaveis

server.use(express.json());
server.use(router);
/////server uses
server.get("/teste", (req: Request, res: Response) => {
    console.log(req.params)
    res.send("testando");
  });

  server.get("/", (req: Request, res: Response) => {
    res.status(StatusCodes.PAYMENT_REQUIRED).json(req.body)
  });

/////starta server
server.listen(process.env.PORT || 3000 , () => {
    return console.log(`software rodando na porta ${process.env.PORT || 3000}`);
});