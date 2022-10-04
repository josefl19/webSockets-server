// Referencia al HTML
const lblOnline = document.querySelector('#lblOnline');
const lblDisconnect = document.querySelector('#lblDisconnect');

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