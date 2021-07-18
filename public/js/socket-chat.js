var socket = io();

let params = new URLSearchParams(window.location.search)

if (!params.has('nombre')) {
    window.location = 'index.html'
    throw new Error('El nombre es necesario')
}

let usuario = {
    nombre: params.get('nombre')
}

socket.on('connect', function () {
    console.log('Conectado al servidor');

    // Mensaje que se envía al servidor cuando un usuario entra a la sala.
    // Primer parámetro es el nombre del evento en string, el segundo son los argumentos, los cuales pueden ser un objeto.
    socket.emit('entrarChat', usuario, (resp) => {
        console.log('Usuarios conectados', resp)
    })
});

// escuchar
socket.on('disconnect', function () {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {

    console.log('Servidor:', mensaje);

});