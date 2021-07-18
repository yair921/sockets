

class Usuarios {
    constructor() {
        this.personas = []
    }

    agregarPersona(id, nombre) {
        let persona = { id, nombre }
        this.personas.push(persona)
        return this.personas

    }

    getPersona(id) {
        let persona = this.personas.find(p => p.id === id)
        return persona
    }

    getPersonaPorSala(sala) {

    }

    borrarPrsona(id) {
        let personaBorrada = this.getPersona(id)
        this.personas = this.personas.filter(p => p.id !== id)
        return personaBorrada
    }

}

module.exports = {
    Usuarios
}