const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./casa-criativa.db')

db.serialize(function(){
    // Criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
    // Inserir dados
    // const query = `
    // INSERT INTO ideas(
    //         image,
    //         title,
    //         category,
    //         description,
    //         link
    //     ) VALUES (?,?,?,?,?);
    // `

    // const values = [
    //     "https://www.flaticon.com/svg/vstatic/svg/1005/1005141.svg?token=exp=1618005864~hmac=7a4a4ea021ea06c80c6f618356343ce0",
    //     "Cursos de Programação",
    //     "Estudo",
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, pariatur autem quibusdam labore quis mollitia consequatur harum hic cum aspernatur minima asperiores placeat, facilis magnam ratione ab et error soluta?",
    //     "https://rocketseat.com.br"
    // ]

    // db.run(query, values, function(err){
    //     if(err) return console.log(err)

    //     console.log(this)
    // })
    
    // Deletar dados
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    //     if(err) return console.log(err)

    //     console.log("DELETE SUCESS", this)
    // })
    
    // Consulta de dados
    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if(err) return console.log(err)

    //     console.log(rows)
    // })
    
})

module.exports = db