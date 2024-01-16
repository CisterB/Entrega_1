const readlineSync = require('readline-sync');
var Reserva = require('./reservas');
var { CadastroPropriedade, visualizarPropriedades,excluirPropriedade, propriedades } = require('./cadastroPropriedade');

var reservas = []; 

var IDreserva = 1;


function CadastroReserva() {
    var ID = IDreserva;
    var nomePropriedade = readlineSync.question('Digite o nome da propriedade: ');
    var nomeUsuario = readlineSync.question('Digite seu nome: ');
    var dataCheckIn = readlineSync.question('Qual a data do checkIn:(DD-MM-AA) ');
    var dataCheckOut = readlineSync.question('Qual a data do checkOut:(DD-MM-AA) ');
    var numerodenoites = readlineSync.question('Quantas noites você vai ficar? ');
    
    console.log(propriedades) // propriedades esta vindo como undefined e nao estou conseguindo comparar o nome nem o preço da propriedade nos codigos abaixos   
    
    //const propriedadeEncontrada = propriedades.find(propriedade => propriedade.nomeCadastro == nomePropriedade);
    //console.log(propriedadeEncontrada)    
    
    //var valorFinal = Number(propriedadeEncontrada.precoPorNoite) * Number(numerodenoites);   // Nao estou conseguindo fazer ele caucular o valor da reserva

    var propriedadeReservaCadastro = new Reserva(ID, nomePropriedade, nomeUsuario, dataCheckIn, dataCheckOut, valorFinal );
    reservas.push(propriedadeReservaCadastro);

    IDreserva++;
}

function visualizarReservas() {
    console.log('\n RESERVAS');

    reservas.forEach(res => {
        console.log('Nome da propriedade: ' + res.nomePropriedade);
        console.log('Reservado para: ' + res.nomeUsuario);
        console.log('CheckIn: ' + res.dataCheckIn);
        console.log('CheckOut: ' + res.dataCheckOut);
        console.log('Valor: ' + res.valorReserva);
        console.log('---------------------');
    });
}

function excluirReserva() {
    if (reservas.length === 0) {
        console.log('Não há reservas para excluir.');
        return;
    }

    console.log('Reservas disponíveis para exclusão:');
    reservas.forEach((reserva, index) => {
        console.log(`${index + 1}. ${reserva.nomePropriedade} - ${reserva.nomeUsuario}`);
    });

    const indiceExclusao = readlineSync.questionInt('Digite o número da reserva que deseja excluir: ');

    if (indiceExclusao >= 1 && indiceExclusao <= reservas.length) {
        const reservaExcluida = reservas.splice(indiceExclusao - 1, 1)[0];
        console.log('Reserva excluída com sucesso:');
        console.log('Nome da propriedade: ' + reservaExcluida.nomePropriedade);
        console.log('Reservado para: ' + reservaExcluida.nomeUsuario);
        console.log('CheckIn: ' + reservaExcluida.dataCheckIn);
        console.log('CheckOut: ' + reservaExcluida.dataCheckOut);
        console.log('Valor: ' + reservaExcluida.valorReserva);
    } else {
        console.log('Número de reserva inválido. Nenhuma reserva foi excluída.');
    }
}

module.exports = { CadastroReserva, visualizarReservas, excluirReserva, reservas};

