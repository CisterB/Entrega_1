// index.js

var readlineSync = require('readline-sync');
var { Cadastro, usuarios } = require('./cadastro'); // Importe a função e o array local
const executarAcao = require('./acoesUsuario');

while (pagInicial !== 'c') {
    var pagInicial = readlineSync.question('Escolha uma opção abaixo: \n a)Fazer Login \n b)Fazer Cadastro \n c)Sair do Programa \n');
    if (pagInicial === 'a') {
        var emailLogin = readlineSync.question('Digite seu email: ')
        var senhaLogin = readlineSync.question('Digite sua senha: ')
        
        let usuarioEncontrado = usuarios.find(usuario => usuario.email === emailLogin);

        if (usuarioEncontrado) {
            if (usuarioEncontrado.senha === senhaLogin) {
                console.log('Login bem-sucedido. Bem-vindo, ' + usuarioEncontrado.nome + '!');
                var usuarioLogado = usuarioEncontrado;
                while (true){
                    
                    var opcaoAcoes = readlineSync.question(' Escolha uma opção:\n1.Ver Meus Dados \n 2.Modificar Meus Dados \n 3.Ver Lista de Propriedades \n 4.Ver Lista de Reservas \n 5.Ver Lista de Anúncios \n 6.Reservar Propriedade \n 7.Cancelar Reserva \n 8.Adicionar Propriedade \n 9.Excluir Propriedade \n 10.Fazer Anúncio \n 11.Excluir Anúncio \n 12.Avaliar Estadia \n 13.Visualizar Avaliações \n Digite "c" para sair.\n ')
                    
                    if (opcaoAcoes === 'c') {
                        break;
                    }
                    executarAcao(opcaoAcoes, usuarioLogado);

                }

            } else {
                console.log('Senha incorreta. Tente novamente.');
            }
        } else {
            console.log('Email não encontrado. Tente novamente ou faça cadastro.');
        }
    }

    if (pagInicial === 'b') {
        Cadastro(); 
    } 
}

console.log(usuarios);
