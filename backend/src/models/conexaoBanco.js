const Sequelize = require('sequelize')


//conectando no banco de dados com sequilize é um orm 
const conexao = new Sequelize('be_the_hero','root','admin',{    
    host: "localhost",
    dialect: "mysql"
})


conexao
.authenticate()
.then(()=>{
   console.log('conexao estabelecida com banco de dados') 
})
.catch((erro)=>{
    console.log('erro ao se conectar no banco de dados' + erro)
})


module.exports = {
    Sequelize: Sequelize,
    conexao : conexao
}