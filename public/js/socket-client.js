// Referencia al HTML
const lblOnline = document.querySelector('#lblOnline');
const lblDisconnect = document.querySelector('#lblDisconnect');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

// Socket del cliente
const socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
    lblDisconnect.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblDisconnect.style.display = '';
})

// Send information from client to server
btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    // Send a object
    const payload = {
        mensaje,
        fecha: new Date().getTime(),
        id: '123ABC'
    }
    socket.emit('enviar-mensaje', payload)
})