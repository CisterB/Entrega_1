// cadastro.js

const readlineSync = require('readline-sync');
var Usuario = require('./usuario');
var usuarios = []; // Array local

var IDusuario = 1;

function Cadastro() {
    var ID = IDusuario;
    var emailCadastro = readlineSync.question('Digite seu email: ');
    var senhaCadastro = readlineSync.question('Digite sua senha: ');
    var nomeCadastro = readlineSync.question('Digite seu nome: ');
    var contatoCadastro = readlineSync.question('Digite seu contato: DDD XXXXX-XXXX \n');
    var historicoReservasCadastro = []
    var usuarioCadastro = new Usuario(ID, emailCadastro, senhaCadastro, nomeCadastro, contatoCadastro, historicoReservasCadastro);
    usuarios.push(usuarioCadastro);
    IDusuario++;
}

module.exports = { Cadastro, usuarios }; // Exporte a função e o array local
