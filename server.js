// Usando Express para criação/configuração do servidor
const express = require("express")
const server = express()

// Parametrização de Ideas
const ideas = [
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/1005/1005141.svg?token=exp=1618005864~hmac=7a4a4ea021ea06c80c6f618356343ce0",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, pariatur autem quibusdam labore quis mollitia consequatur harum hic cum aspernatur minima asperiores placeat, facilis magnam ratione ab et error soluta?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2936/2936886.svg?token=exp=1618005940~hmac=245f288b484f69aedac9143c20e93c1a",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, pariatur autem quibusdam labore quis mollitia consequatur harum hic cum aspernatur minima asperiores placeat, facilis magnam ratione ab et error soluta?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2906/2906496.svg?token=exp=1618005981~hmac=3cfeedb1d7b3d1adfb5d8429aa5aa83c",
        title: "Meditação",
        category: "Espiritualidade",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, pariatur autem quibusdam labore quis mollitia consequatur harum hic cum aspernatur minima asperiores placeat, facilis magnam ratione ab et error soluta?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/3227/3227649.svg?token=exp=1618006015~hmac=f2540146ffa3f52fe1f687693769c01e",
        title: "Desenho & Pintura",
        category: "Arte",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, pariatur autem quibusdam labore quis mollitia consequatur harum hic cum aspernatur minima asperiores placeat, facilis magnam ratione ab et error soluta?",
        url: "https://rocketseat.com.br"
    },
]

// Configuração de arquivos estáticos (css, scripts, imgs)
server.use(express.static("public"))

// Configuração do Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server, 
    noCache: true,
})

// Criando rota get"/"
// Feito captura do cliente, para resposta
server.get("/", function(req, res) {
    // Lógica para mostrar no index, quantidade de Ideas
    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas){
        if (lastIdeas.length < 3){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", { ideas: reversedIdeas })
})

// Ligando servidor na porta 3000
server.listen(3000)