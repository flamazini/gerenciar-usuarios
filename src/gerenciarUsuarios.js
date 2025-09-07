const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João']

function retornarUsuarios (){
    return usuarios;
}

function adicionarNovoUsuario (nome){
    usuarios.push(nome);
}
module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}