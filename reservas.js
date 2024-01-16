class Reserva {
    constructor(idreserva , idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorReserva) {
        this.ID = idreserva;
        this.nomePropriedade = idPropriedade;
        this.nomeUsuario = idUsuario;
        this.dataCheckIn = dataCheckIn
        this.dataCheckOut = dataCheckOut
        this.valorReserva = valorReserva
    }
    
}

module.exports = Reserva;