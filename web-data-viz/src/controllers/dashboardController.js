var dashboardModel = require('../models/dashboardModel')

function buscarDados(req,res){
    var idUsuario = req.params.id; // id usado na requisição 
    console.log(idUsuario,'[ID]')
    // Funções que o model irá executar
    Promise.all([ // Promise.all executa varías funções do model, assim é possível montar um json com várias propriedades
        dashboardModel.buscarTotalUsuarios(),
        dashboardModel.buscarEstiloPopular(),
        dashboardModel.buscarEstilos(),
        dashboardModel.buscarEstiloUsuario(idUsuario)
    ]
    )
    
    .then( function (resultadoQuery) {
        console.log('O que o model retorna ====>', resultadoQuery)
        res.status(200).json({
            totalUsuarios: resultadoQuery[0][0].totalUsers, // Cada instrução SQL retorna um array de resultados que ficam dentro de um array
            estiloMaisPopular: resultadoQuery[1][0].estiloArte,
            totalUsuariosEstilos: [
                resultadoQuery[2][0], 
                resultadoQuery[2][1], 
                resultadoQuery[2][2],
                resultadoQuery[2][3],
                resultadoQuery[2][4] 
            ],
            estiloDoUsuario: resultadoQuery[3][0].estiloUsuario
        })
    })
    .catch( function (erro) {
        console.log(erro);

        console.log(
            "Houve um erro ao buscar os dados da dashboard:",
            erro.sqlMessage
        );

        res.status(500).json(erro.sqlMessage);
    })
}
// Exporta a função para o routes
module.exports = {
    buscarDados
}