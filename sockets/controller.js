
const socketController = (socket) => {
    console.log('Cliente conectado');

    socket.on('disconnect', () => {
        console.log('Cliente desconectado!', socket.id);
    });

    // receive a message from the client
    socket.on('enviar-mensaje', ( payload, callback ) => {
        // Emitir mensaje a todos los clientes, excepto a quien lo envio
        socket.broadcast.emit('enviar-mensaje', payload);                // Colocar el enviar-mensaje en el cliente

        const id = 123456;
        callback( id );             // Mostrar ID a quien envio el mensaje
    });
}

export { socketController }