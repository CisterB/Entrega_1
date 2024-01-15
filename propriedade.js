class Propriedade {
    constructor(id, nome, endereco, capacidadeHospedes, numeroQuartos, precoPorNoite, disponibilidade) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.capacidadeHospedes = capacidadeHospedes;
        this.numeroQuartos = numeroQuartos;
        this.precoPorNoite = precoPorNoite;
        this.disponibilidade = disponibilidade;
    }
    
}

module.exports = Propriedade;