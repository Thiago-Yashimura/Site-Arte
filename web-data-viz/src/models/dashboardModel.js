var database = require("../database/config") // importa o arquivo do banco config.js

function buscarTotalUsuarios(){
    var instrucaoSql = `
        SELECT COUNT(*) AS totalUsers FROM usuario;` // AS da o nome da propriedade que será retornado, caso não tivesse totalUSers o objeto retornado seria apenas o comando COUNT(*): 4
    console.log('Executando instrução SQL: ' + instrucaoSql)
    return database.executar(instrucaoSql)
}

function buscarEstiloPopular() {
    var instrucaoSql = `
        SELECT estiloArte, COUNT(*) AS quantidade
        FROM resultadoQuiz
        GROUP BY estiloArte
        ORDER BY quantidade DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function buscarEstilos() {
    var instrucaoSql = `
        SELECT estiloArte, COUNT(*) AS quantidade
        FROM resultadoQuiz
        GROUP BY estiloArte
        ORDER BY quantidade DESC;
    `;

    return database.executar(instrucaoSql);
}

function buscarEstiloUsuario(idUsuario){
    var instrucaoSql = `
        SELECT estiloArte AS estiloUsuario
        FROM resultadoQuiz
        WHERE fk_usuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

// Exporta a função para o controller
module.exports = {
    buscarTotalUsuarios,
    buscarEstiloPopular,
    buscarEstilos,
    buscarEstiloUsuario
}