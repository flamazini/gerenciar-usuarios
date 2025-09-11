const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const {expect } = require('chai');

describe('Testar as Funções de Gestão de Usuarios', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um nome na lista de usuarios 
        adicionarNovoUsuario({
            nome:'Maria',
            email: 'maria@gospel.com'
        });

        //2. Retornar a lista de usuarios na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();

        //3. Verificar se o nome adicionado é o ultimo nome na lista
        expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        expect(listaDeUsuarios.at(-1).email).to.equal('maria@gospel.com');

        //4. Verificar o email na terceira posicao da lista
        expect(listaDeUsuarios[2].nome).to.equal('Lucas');

    });
});