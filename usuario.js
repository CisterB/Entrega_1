// usuario.js

class Usuario {
    constructor(id, email, senha, nome, contato, historicoReservas = []) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.contato = contato;
        this.historicoReservas = historicoReservas;
    }
}

module.exports = Usuario;
