var quizModel = require("../models/quizModel") // Importa o arquivo model do Quiz
 
function salvar(req,res){
    var idUsuario = req.body.idUsuarioServer
    var estilo = req.body.estiloServer

    if (idUsuario == undefined || idUsuario <= 0){ // Verifica se é um ID válido
        return res.status(400).json(
            { mensagem: "ID inválido"} // Retorna um JSON com uma mensagem de erro
        )
    }
// Com o model importando, consigo utilizar funções desse arquivo
    quizModel.salvarSql(idUsuario, estilo) // Função de model recebe o valor do id e estilo
        .then( function (resultado) {
            res.status(201).json({
                mensagem: "Resultado salvo com sucesso",
                idResultado: resultado.insertId
            })
        })
    .catch( function (erro) { // Caso ocorra algum erro cai no bloco de catch()
        console.log(erro)
        res.status(500).json({
            mensagem: "Erro ao salvar resultado"
        })
    })
}

module.exports = { salvar } // Exporta a função salvar do controller
