const readlineSync = require('readline-sync');
var Propriedade = require('./propriedade');
var propriedade = []; 

var IDpropriedade = 1;

function CadastroPropriedade() {
    var ID = IDpropriedade;
    var nomeCadastro = readlineSync.question('Digite o nome da propriedade: ');
    var enderecoCadastro = readlineSync.question('Digite o endereço: ');
    var capacidadeHospedesCadastro = readlineSync.question('Qual a capacidade de hospedes: ');
    var numeroQuartosCadastro = readlineSync.question('Possui quantos quartos:');
    var precoPorNoiteCadastro = readlineSync.question('Qual o preço por noite: ');
    var disponibilidadeCadastro = readlineSync.question('Qual a disponibilidade: data inicial(DD/MM/AA) - data final(DD/MM/AA) \n');
    
    var propriedadeCadastro = new Propriedade(ID, nomeCadastro, enderecoCadastro, capacidadeHospedesCadastro, numeroQuartosCadastro, precoPorNoiteCadastro, disponibilidadeCadastro);
    propriedade.push(propriedadeCadastro);
    IDpropriedade++;
}

function visualizarPropriedades(propriedade) {
    console.log('\nLISTA DE PROPRIEDADES');

    propriedade.forEach(propriedade => {
        console.log('ID: ' + propriedade.id);
        console.log('Nome: ' + propriedade.nome);
        console.log('Endereço: ' + propriedade.endereco);
        console.log('Capacidade de Hóspedes: ' + propriedade.capacidadeHospedes);
        console.log('Número de Quartos: ' + propriedade.numeroQuartos);
        console.log('Preço por Noite: ' + propriedade.precoPorNoite);
        console.log('Disponibilidade: ' + propriedade.disponibilidade);
        console.log('---------------------');
    });
}

module.exports = { CadastroPropriedade, visualizarPropriedades, propriedade }; 