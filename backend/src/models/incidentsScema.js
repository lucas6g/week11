const Conexao = require('./conexaoBanco')
const ongsScema = require('./ongsScema')

//cada caso vai ter um id 
const Incidents = Conexao.conexao.define('insidents',{
    id: {
        type: Conexao.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title :{
        type : Conexao.Sequelize.STRING,
        allowNull: false
    },
    description :{
        type : Conexao.Sequelize.STRING,
        allowNull: false
    },
    value:{
        type:Conexao.Sequelize.DOUBLE,
        allowNull: false

    },
    //relacionamento ong que criou ess caso
    ong_id:{
        type:Conexao.Sequelize.STRING,
        allowNull: false,

       
    }

})


 Incidents.belongsTo(ongsScema, {foreignKey: 'ong_id'})



//cria a tabela no banco
// Incidents.sync({force:true})

module.exports = Incidents