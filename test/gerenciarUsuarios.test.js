const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const {expect } = require('chai');

describe('Testar as Funções de Gestão de Usuarios', function () {
    it('Validar que posso adicionar um novo nome de usuárop na lista', function () {
        //1. Adicionar um nome na lista de usuarios 
        adicionarNovoUsuario('Maria');
        //2. Retornar a lista de usuarios na caixa lista de usuarios
        const listaDeUusarios = retornarUsuarios();
        //3. Verificar se o nome adicionado é o ultimo nome na lista
        expect(listaDeUusarios.at(-1)).to.equal('Maria');
    });
});