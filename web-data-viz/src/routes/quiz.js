var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.post("/salvar", function (req, res) { // Endpoint /salvar POST que vai chamar uma função do controller
    quizController.salvar(req, res);
})

module.exports = router // Exporta o router para o app.js 