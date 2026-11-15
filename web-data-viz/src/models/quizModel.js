var database = require("../database/config") // importa o arquivo do banco config.js

function salvarSql(idUsuario, estilo){
    var instrucaoSql = `
        INSERT INTO resultadoQuiz ( fk_usuario, estiloArte ) VALUES (${idUsuario}, '${estilo}') ` // Utilizando prepared statements
    console.log('Executando instrução SQL: ' + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {salvarSql}