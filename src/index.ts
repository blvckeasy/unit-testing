import { Request, Response } from 'express';
import Server from './server';

async function bootstrap () {
    const server = new Server({
        logging: true,
    })
    
    // server.setupMiddlewares()
    // server.setupRoutes()


    server.listen();
}

bootstrap();