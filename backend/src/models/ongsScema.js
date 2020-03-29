
const Conexao = require('./conexaoBanco')


//tabela de ongs no banco de dados
const Ongs = Conexao.conexao.define('ongs',{
    id:{ //cada obejeto sera uma coluna
        type:Conexao.Sequelize.STRING,
        primaryKey: true
    },
    name:{
        type:Conexao.Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type:Conexao.Sequelize.STRING,
        allowNull:false

    },
    whatsapp:{
        type:Conexao.Sequelize.STRING,
        allowNull:false
    },
    city:{
        type:Conexao.Sequelize.STRING,
        allowNull:false
    },
    uf:{
        type:Conexao.Sequelize.STRING,
       allowNull:false 
    }

})

//cria a tabela no banco
// Ongs.sync({force:true})

module.exports = Ongs