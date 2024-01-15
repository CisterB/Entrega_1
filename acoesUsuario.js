// acoesFuncionario.js

const readlineSync = require('readline-sync');

function verMeusDados(usuarioLogado) {
    console.log('\nMEUS DADOS');
    console.log('ID: ' + usuarioLogado.id);
    console.log('Nome: ' + usuarioLogado.nome);
    console.log('Email: ' + usuarioLogado.email);
    console.log('Senha: ' + usuarioLogado.senha);
    console.log('Contato: ' + usuarioLogado.contato);
    console.log('---------------------');
}

function modificarMeusDados(usuarioLogado) {
    console.log('\n MODIFICAR DADOS ');

    console.log('dados atuais:');
    console.log('1. Nome: ' + usuarioLogado.nome);
    console.log('2. Email: ' + usuarioLogado.email);
    console.log('3. Senha: ' + usuarioLogado.senha);
    console.log('4. Contato: ' + usuarioLogado.contato);

    const opcao = readlineSync.question('Escolha o número do dado que deseja modificar (ou "0" para voltar): ');

    switch (opcao) {
        case '1':
            usuarioLogado.nome = readlineSync.question('Digite o novo nome: ');
            console.log('Nome modificado com sucesso.');
            break;

        case '2':
            usuarioLogado.email = readlineSync.question('Digite o novo email: ');
            console.log('Email modificado com sucesso.');
            break;

        case '3':
            usuarioLogado.senha = readlineSync.question('Digite a nova senha: ');
            console.log('Senha modificada com sucesso.');
            break;

        case '4':
            usuarioLogado.contato = readlineSync.question('Digite o novo contato: ');
            console.log('Contato modificado com sucesso.');
            break;  

        case '0':
            console.log('Voltando ao menu principal.');
            break;

        default:
            console.log('Opção inválida.');
            break;
    }
}


function executarAcao(opcao, usuarioLogado) {
    switch (opcao) {
        case '1':
            verMeusDados(usuarioLogado);
            break;
        case '2':
            modificarMeusDados(usuarioLogado);
            break;

        default:
            console.log('Opção inválida.');
            break;
    }
}

module.exports = executarAcao;