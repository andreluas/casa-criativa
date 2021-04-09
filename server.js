// Usando Express para criação/configuração do servidor
const express = require("express")
const server = express()

// Configuração de arquivos estáticos (css, scripts, imgs)
server.use(express.static("public"))

// Criando rota get"/"
// Feito captura do cliente, para resposta
server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res){
    return res.sendFile(__dirname + "/ideias.html")
})

// Ligando servidor na porta 3000
server.listen(3000)