import express from 'express';
import { Request, Response } from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//sets
server.set('view engine','mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//uses

server.use(express.static(path.join(__dirname, '../public')));

//routes
server.use(mainRoutes);

//pag 404
server.use((req: Request, res: Response)=>{
    res.render('pages/404');
})

const port = process.env.PORT;
server.listen(port,()=>console.log('Rodando na porta %d, iniciado em %s',port, Date() ));