// Este arquivo foi feito exibir as funcoes que mexem com informacoes do da propriedade 

const readlineSync = require('readline-sync');
var Propriedade = require('./propriedade');
var Usuario = require('./usuario');
var { CadastroReserva, visualizarReservas, excluirReserva, reservas} = require('./cadastroReserva')

var propriedades = []; 

var IDpropriedade = 1;

function CadastroPropriedade() {
    var ID = IDpropriedade;
    var nomeCadastro = readlineSync.question('Digite o nome da propriedade: ');
    var enderecoCadastro = readlineSync.question('Digite o endereço: ');
    var capacidadeHospedesCadastro = readlineSync.question('Qual a capacidade de hospedes: ');
    var numeroQuartosCadastro = readlineSync.question('Possui quantos quartos:');
    var precoPorNoiteCadastro = readlineSync.question('Qual o preço por noite: ');
    var disponibilidadeCadastro = readlineSync.question('Qual a disponibilidade: data inicial(DD/MM/AA) - data final(DD/MM/AA) \n'); // observacao: faltou um codigo para a verificacao da data 
    
    var propriedadeCadastro = new Propriedade(ID, nomeCadastro, enderecoCadastro, capacidadeHospedesCadastro, numeroQuartosCadastro, precoPorNoiteCadastro, disponibilidadeCadastro);
    propriedades.push(propriedadeCadastro); // adiciona o cadastro preenchido pelo usuario ao final da lista propriedades

    IDpropriedade++; //sempre se adiciona 1 ao Id, assim o id permanece unico independente da movimentacao da lista
}

function visualizarPropriedades() {
    console.log('\nLISTA DE PROPRIEDADES');

    //Exibe cada elemento especificado da lista propriedades
    propriedades.forEach(prop => {
        console.log('Nome: ' + prop.nome);
        console.log('Endereço: ' + prop.endereco);
        console.log('Capacidade de Hóspedes: ' + prop.capacidadeHospedes);
        console.log('Número de Quartos: ' + prop.numeroQuartos);
        console.log('Preço por Noite: ' + prop.precoPorNoite);
        console.log('Disponibilidade: ' + prop.disponibilidade);
        console.log('---------------------');
    });
}

function excluirPropriedade() {
    if (propriedades.length === 0) { // Confere se existe alguma propriedade registrada
        console.log('Não há propriedades para excluir.');
        return;
    }

    console.log('Propriedades disponíveis para exclusão:');
    propriedades.forEach((propriedade, index) => {
        console.log(`${index + 1}. ${propriedade.nome}`);
    });

    const indiceExclusao = readlineSync.questionInt('Digite o número da propriedade que deseja excluir: ');

    if (indiceExclusao >= 1 && indiceExclusao <= propriedades.length) {
        const propriedadeExcluida = propriedades[indiceExclusao - 1];

        // Verifica se a propriedade está na lista de reservas
        const estaReservada = reservas.find(reserva => reserva.nomePropriedade === propriedadeExcluida.nome);

        if (!estaReservada) {
            // Remove a propriedade apenas se não estiver reservad
            propriedades.splice(indiceExclusao - 1, 1);
            console.log('Propriedade excluída com sucesso:');
            console.log('Nome da propriedade: ' + propriedadeExcluida.nome);
            console.log('Endereço: ' + propriedadeExcluida.endereco);
            console.log('Capacidade de Hóspedes: ' + propriedadeExcluida.capacidadeHospedes);
            console.log('Número de Quartos: ' + propriedadeExcluida.numeroQuartos);
            console.log('Preço por Noite: ' + propriedadeExcluida.precoPorNoite);
            console.log('Disponibilidade: ' + propriedadeExcluida.disponibilidade);
        } else {
            console.log('Não é possível excluir a propriedade, pois está reservada.');
        }
    } else {
        console.log('Número de propriedade inválido. Nenhuma propriedade foi excluída.');
    }
}

module.exports = { CadastroPropriedade, visualizarPropriedades,excluirPropriedade, propriedades }; 
