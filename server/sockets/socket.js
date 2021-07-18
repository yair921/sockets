const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios')

const usuarios = new Usuarios()

io.on('connection', (client) => {

    //console.log('Usuario conectado');

    // Este método es invocado desde el front con el nombre del evento.
    client.on('entrarChat', (data, callback) => {

        if (!data.nombre) {
            callback({
                error: true,
                mensaje: 'El nombre es necesario'
            })
        }

        let personas = usuarios.agregarPersona(client.id, data.nombre)
        callback(personas)
    })

});