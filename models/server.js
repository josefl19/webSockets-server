import express from "express"
import cors from "cors";
import * as http from 'http';
import { Server } from "socket.io";

class Servidor {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer( this.app );          // Servidor para los sockets
        this.io = new Server( this.server );                      // Informacion de sockets conectados. Puede usuarse para enviar mensajes a todos los clietes

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de aplicación
        this.routes();

        // Configuracion de sockets
        this.sockets();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // public
        this.app.use( express.static('public') );
    }

    routes() {
        // this.app.use(this.paths.usuariosPath, router);
    }

    sockets() {
        this.io.on("connection", (socket) => {
                socket.on('disconnect', () => {
                    console.log('Cliente desconectado!', socket.id);
                });

                // receive a message from the client
                socket.on('enviar-mensaje', ( payload ) => {

                    // Emitir mensaje a todos los clientes
                    this.io.emit('enviar-mensaje', payload);                // Colocar el enviar-mensaje en el cliente
                });
            });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

export { Servidor }